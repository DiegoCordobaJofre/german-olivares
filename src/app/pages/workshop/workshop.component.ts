import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../content/site.content';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-workshop',
  imports: [PageHeroComponent, RouterLink],
  templateUrl: './workshop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkshopComponent {
  readonly site = SITE;
}
