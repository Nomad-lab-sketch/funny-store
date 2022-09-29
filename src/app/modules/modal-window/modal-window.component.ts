import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindowComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() isCloseModal = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
