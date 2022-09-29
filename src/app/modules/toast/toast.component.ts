import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit, OnDestroy {
  constructor(public errorService: ErrorService) {}

  message: string;
  isToastOpen = false;
  messageSub: Subscription;

  ngOnInit(): void {
    this.messageSub = this.errorService.error$.subscribe((item) => {
      this.message = item;
      this.isToastOpen = true;
    });
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }
}
