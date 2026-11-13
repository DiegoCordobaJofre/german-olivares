import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  template: `
    <div class="container">
      <p class="kicker">{{ index() }} — {{ kicker() }}</p>
      <h1>{{ title() }}</h1>
      <p class="deck">{{ deck() }}</p>
    </div>
  `,
  host: { class: 'page-hero' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeroComponent {
  readonly index = input.required<string>();
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly deck = input.required<string>();
}
