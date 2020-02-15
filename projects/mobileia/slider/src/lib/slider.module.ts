import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { SliderComponent } from './slider.component';
import { HttpClientModule } from '@angular/common/http';
import { MiaSliderConfig } from './slider.service';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    HttpClientModule,
  ],
  exports: [SliderComponent]
})
export class SliderModule {
  constructor (@Optional() @SkipSelf() parentModule: SliderModule) {
    if (parentModule) {
      throw new Error(
        'AuthenticationModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: MiaSliderConfig): ModuleWithProviders {
    return {
      ngModule: SliderModule,
      providers: [
        {provide: MiaSliderConfig, useValue: config }
      ]
    };
  }
}
