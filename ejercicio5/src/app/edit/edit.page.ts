import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../components/task/task.component';
import { AddtaskService } from '../services/addtask.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../plainobjects/task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task = {
    id: 0,
    title: undefined,
    description: undefined,
    type: undefined
  };
  id: string;

  constructor(
    private taskService: AddtaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.task = this.taskService.taskList[this.id];
  }

  save() {
    this.taskService.editTask(+this.id, this.task);
    this.task = new Task();
    this.router.navigate(['/home']);
  }

  back() {
    this.router.navigate(['/home']);
  }

}
