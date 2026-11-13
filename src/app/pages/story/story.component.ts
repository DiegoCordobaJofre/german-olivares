import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SITE } from '../../content/site.content';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-story',
  imports: [PageHeroComponent, RouterLink],
  templateUrl: './story.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent {
  readonly site = SITE;
  private readonly route = inject(ActivatedRoute);

  constructor() {
    afterNextRender(() => {
      const fragment = this.route.snapshot.fragment;
      if (!fragment) {
        return;
      }
      document.getElementById(fragment)?.scrollIntoView({ block: 'start' });
    });
  }
}
