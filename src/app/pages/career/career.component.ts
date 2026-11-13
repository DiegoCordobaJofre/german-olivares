import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../content/site.content';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-career',
  imports: [PageHeroComponent, RouterLink],
  templateUrl: './career.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerComponent {
  readonly site = SITE;
}
