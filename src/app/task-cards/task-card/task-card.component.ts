import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() priority: string;

  @Output() taskDeleted = new EventEmitter();
  @Output() taskCompleted = new EventEmitter<{
    taskTitle: string;
    taskDescription: string;
    taskPriority: string;
  }>();
  @Output() taskEdited = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onTaskDeleted() {
    this.taskDeleted.emit();
  }

  onTaskCompleted() {
    this.taskCompleted.emit();
  }
}
