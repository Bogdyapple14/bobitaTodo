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
  isSelectOpen: boolean = false;
  title: string = '';
  description: string = '';
  priority: string = 'Medium';
  editMenu: boolean = false;
  cards: Card[] = [];
  editGoesOn: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.getFromLocalStorage();
  }

  onCloseMenu() {
    this.closeMenu.emit();
    this.title = '';
    this.description = '';
    this.priority = 'Medium';
  }

  onCloseEditMenu() {
    this.editMenu = false;
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

  onTaskEdited(index) {
    this.editMenu = true;
    this.title = this.cards[index].title;
    this.priority = this.cards[index].priority;
    this.description = this.cards[index].description;
  }

  editTask(index) {
    console.log(this.cards[index]);
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
