import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private _icons: string[] = [
    'arrow-right',
    'lk-arrow',
    'star-1',
    'star-2',
    'vk',
    'tw',
    'insta',
    'trip',
    'fb'
  ];

  constructor(
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer
  ) {}

  init() {
    this._icons.forEach((icon) => this.add(icon));
  }

  private add(name: string) {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${environment.APP_URL}assets/icons/${name}.svg`
      )
    );
  }
}
