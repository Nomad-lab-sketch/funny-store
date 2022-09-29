import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '../../error/error.service';

export interface SliderType {
  img: string;
  id: number;
  alt: string;
}

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getImgForSlider(): Observable<SliderType[]> {
    return this.http
      .get<SliderType[]>('http://localhost:3000/slider')
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
