import { Observable, delay, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '../error/error.service';

export interface CartListType {
  id: number;
  img: string;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getCartList(): Observable<CartListType[]> {
    return this.http
      .get<CartListType[]>('http://localhost:3000/cartList')
      .pipe(catchError(this.errorHandler.bind(this)));
  }
  deleteCart(id: number): Observable<CartListType[]> {
    return this.http
      .delete<CartListType[]>(`http://localhost:3000/cartList/${id}`)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
