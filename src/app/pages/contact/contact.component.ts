import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../content/site.content';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-contact',
  imports: [PageHeroComponent, RouterLink],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly site = SITE;
}
