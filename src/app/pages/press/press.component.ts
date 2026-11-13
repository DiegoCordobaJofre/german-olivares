import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SITE } from '../../content/site.content';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-press',
  imports: [PageHeroComponent],
  templateUrl: './press.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressComponent {
  readonly site = SITE;
  readonly copied = signal(false);

  async copyBoilerplate(): Promise<void> {
    const text = this.site.boilerplate;
    try {
      await navigator.clipboard.writeText(text);
      this.copied.set(true);
      return;
    } catch {
      this.copied.set(this.copyWithSelection(text));
    }
  }

  private copyWithSelection(text: string): boolean {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    area.remove();
    return ok;
  }
}
