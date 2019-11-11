import { Component, Input } from '@angular/core';
import { TaskType } from 'src/enums/tasktype';
import { AddtaskService } from 'src/app/services/addtask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {

  @Input("id") id = 0;
  @Input("title") title = "";
  @Input("type") type: TaskType;
  description = "";

  constructor(
    private taskService: AddtaskService,
    private router: Router
  ) { }

  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
