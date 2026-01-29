import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from "./shared/site-footer/site-footer";
import { SiteHeader } from "./shared/site-header/site-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFooter, SiteHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cfa-website');
}
