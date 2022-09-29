import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, delay, throwError, catchError } from 'rxjs';
import { ErrorService } from '../error/error.service';

export interface Catalog {
  id: number;
  img: string;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getCatalog(): Observable<Catalog[]> {
    return this.http
      .get<Catalog[]>('http://localhost:3000/catalog')
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
