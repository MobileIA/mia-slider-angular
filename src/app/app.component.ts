import { Component } from '@angular/core';
import { SliderService } from 'projects/mobileia/slider/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mia-slider-angular';

  constructor(
    protected sliderService: SliderService
  ) {
    this.sliderService.fetchActive().subscribe(data => {
      console.log(data);
    });
  }
}
