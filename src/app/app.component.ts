import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SITE } from './content/site.content';
import { SeoService } from './core/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly site = SITE;
  readonly menuOpen = signal(false);
  readonly year = new Date().getFullYear();

  constructor() {
    effect(() => {
      this.document.body.classList.toggle('menu-open', this.menuOpen());
    });

    this.seo.apply(this.seoKey());
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.menuOpen.set(false);
        this.seo.apply(this.seoKey());
      });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private seoKey(): string {
    let route = this.router.routerState.snapshot.root;
    let key = 'home';
    while (route.firstChild) {
      route = route.firstChild;
      const seo = route.data['seo'];
      if (typeof seo === 'string') {
        key = seo;
      }
    }
    return key;
  }
}
