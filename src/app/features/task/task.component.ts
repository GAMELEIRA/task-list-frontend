import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoInfoModule,
  PoLoadingModule,
  PoWidgetModule,
} from '@po-ui/ng-components';
import { RouterService } from '../../shared/services/router/routrer.service';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    PoFieldModule,
    PoButtonModule,
    PoContainerModule,
    ReactiveFormsModule,
    PoLoadingModule,
    PoWidgetModule,
    PoInfoModule,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  public tasks: Array<Task> = [];

  constructor(
    public routerService: RouterService,
    private taskService: TaskService
  ) {
    this.resquestGetTaks();
  }

  private resquestGetTaks = (): void => {
    this.taskService.getTasks(1).subscribe((tasks) => {
      this.tasks = tasks;
    });
  };

  public showDetail = (): void => {};
}
