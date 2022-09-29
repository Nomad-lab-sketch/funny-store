import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  isActiveWindowModal: boolean = false;

  changeIsActiveWindowModal(bool: boolean) {
    return (this.isActiveWindowModal = bool);
  }
}
