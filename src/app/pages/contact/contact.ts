import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // ====== CONFIG (edit once) ======
  schoolName = 'CF Andrews High School';
  tagline = 'Pillanna Garden, Bangalore • Nursery to 10th';

  addressLine1 = '2nd Stage, Pillanna Garden';
  addressLine2 = 'Bangalore, Karnataka';

  phoneDisplay = '+91 08025497878';
  whatsappDisplay = '+91 9880065321';
  email = '';

  mapsLink = 'https://maps.app.goo.gl/y6JuUkpEPbyfnXYL8?g_st=ic';

  hoursWeekday = 'Mon–Fri: 9:00 AM – 4:00 PM';
  hoursSaturday = 'Sat: 9:00 AM – 1:00 PM';
  hoursSunday = 'Sun: Closed';

  form = {
    name: '',
    phone: '',
    studentClass: '',
    message: '',
  };

  // ✅ FIX: trusted resource URL for iframe
  mapEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const raw = this.toEmbedUrl('CF Andrews High School, 2nd Stage Pillanna Garden, Bangalore');
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(raw);
  }

  get telLink() {
    return `tel:${this.phoneDisplay.replace(/\s/g, '')}`;
  }

  get whatsappLink() {
    const num = this.whatsappDisplay.replace(/\s/g, '').replace('+', '');
    return `https://wa.me/${num}`;
  }

  get mailLink() {
    return `mailto:${this.email}`;
  }

  sendEnquiry() {
    if (!this.email) {
      const msg = encodeURIComponent(
        `Admissions enquiry\n\nName: ${this.form.name}\nPhone: ${this.form.phone}\nClass: ${this.form.studentClass}\n\nMessage: ${this.form.message}`,
      );
      window.open(`${this.whatsappLink}?text=${msg}`, '_blank', 'noopener');
      this.form = { name: '', phone: '', studentClass: '', message: '' };
      return;
    }

    const subject = encodeURIComponent(`Enquiry - ${this.schoolName}`);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nPhone: ${this.form.phone}\nStudent Class: ${this.form.studentClass}\n\nMessage:\n${this.form.message}\n\n— Sent from ${this.schoolName} website`,
    );

    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }

  private toEmbedUrl(query: string) {
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  }
}
