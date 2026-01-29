import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-site-footer',
  imports: [RouterModule, ButtonModule, DividerModule],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  year = new Date().getFullYear();

  // TODO: replace with real numbers
  phone = '+91 9880065321';
  whatsapp = '+91 9880065321';
  email = 'cfa.school@email.com';

  mapsLink = 'https://maps.app.goo.gl/y6JuUkpEPbyfnXYL8?g_st=ic';

  get telLink() {
    return `tel:${this.phone.replace(/\s/g, '')}`;
  }

  get waLink() {
    const num = this.whatsapp.replace(/\s/g, '').replace('+', '');
    return `https://wa.me/${num}`;
  }

  get mailLink() {
    return `mailto:${this.email}`;
  }
}
