import { Component, Input, OnInit } from '@angular/core';

enum SVG {
  delete = '../../../assets/icons/buttons/delete.svg',
  question = '../../../assets/icons/buttons/question.svg',
  success = '../../../assets/icons/buttons/done.svg',
}

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css'],
})
export class SimpleButtonComponent implements OnInit {
  constructor() {}

  @Input() buttonType: 'delete' | 'question' | 'success';
  title: string;
  svg: string;
  fill: string;
  background: string;

  @Input() id: number;
  @Input() handler: (id: number) => void;

  button() {
    switch (this.buttonType) {
      case 'delete':
        this.title = 'Удалить';
        this.svg = SVG.delete;
        this.fill = '#F34642';
        this.background = '#F34642';
        break;
      case 'question':
        this.title = 'Вы уверенны';
        this.svg = SVG.question;
        this.fill = '#2492FF';
        this.background = '#2492FF';
        break;
      case 'success':
        this.title = 'Подтвердить';
        this.svg = SVG.success;
        this.fill = '#38B87D';
        this.background = '#38B87D';
        break;
      default:
        this.title = 'success';
        this.svg = SVG.success;
        this.fill = '#38B87D';
        this.background = '#38B87D';
        break;
    }
  }

  ngOnInit(): void {
    this.button();
  }
}
