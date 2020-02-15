import { Injectable, Optional } from '@angular/core';
import { ApiResponse, MiaHttpService } from "@mobileia/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slider } from './entities/slider';

export class MiaSliderConfig {
  baseUrl = '';
}

@Injectable({
  providedIn: 'root'
})
export class SliderService extends MiaHttpService {

  protected _baseUrl = '';
  
  constructor(
    protected http: HttpClient,
    @Optional() config: MiaSliderConfig
  ) {
    super(http);
    // Configuracion de Base URL
    if (config) {
      this._baseUrl = config.baseUrl;
    }
  }

  fetchActive(): Observable<ApiResponse<Array<Slider>>> {
    return this.postArray(this._baseUrl + 'slider/list', { });
  }

  sumClick(sliderId: number): Observable<ApiResponse<Slider>> {
    return this.postObject(this._baseUrl + 'slider/click', { id: sliderId });
  }
}
