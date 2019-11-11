import { Component, OnInit } from '@angular/core';
import { AddtaskService } from '../services/addtask.service';
import { TaskComponent } from '../components/task/task.component';
import { Router } from '@angular/router';
import { Task } from '../plainobjects/task';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  task: Task = {
    id: 0,
    title: undefined,
    description: undefined,
    type: undefined
  };

  constructor(
    private taskService: AddtaskService,
    private router: Router
  ) { }

  ngOnInit() { }

  save() {
    this.taskService.addTask(this.task);
    this.task = new Task();
    this.router.navigate(['/home']);
  }

  back() {
    this.router.navigate(['/home']);
  }

}
