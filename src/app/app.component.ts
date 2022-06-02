import { Component, OnInit } from '@angular/core';
import { IconService } from './features/icon/service/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lagoona';

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.iconService.init();
  }
}
