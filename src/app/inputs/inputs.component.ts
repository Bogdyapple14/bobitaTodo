import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../task-card/card.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() menu: boolean;
  @Output() closeMenu = new EventEmitter<{
    menu: boolean;
  }>();
  title: string = '';
  description: string = '';
  priority: string = '';
  inputs = [
    { placeholder: 'Enter Task Title', binding: this.title },
    { placeholder: 'Enter Task Description', binding: this.description },
    { placeholder: 'Enter Task Priority', binding: this.priority },
  ];
  cards: Card[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getFromLocalStorage();
  }

  onCloseMenu() {
    this.closeMenu.emit();
    this.title = '';
    this.description = '';
    this.priority = '';
  }

  addCard() {
    if (this.title && this.priority && this.description) {
      this.cards.push(new Card(this.title, this.priority, this.description));
      this.addToLocalStorage();
      this.onCloseMenu();
    } else alert('There are no task properties entered');
  }

  clearCards() {
    this.cards = [];
    localStorage.clear();
    this.onCloseMenu();
  }

  onTaskDeleted(index) {
    this.cards.splice(index, 1);
    this.addToLocalStorage();
  }

  onTaskCompleted(index) {
    this.cards.splice(index, 1);
    this.addToLocalStorage();
  }

  addToLocalStorage() {
    localStorage.setItem('task-card', JSON.stringify(this.cards));
  }

  getFromLocalStorage() {
    if (localStorage.getItem('task-card'))
      this.cards = JSON.parse(localStorage.getItem('task-card'));
  }
}
