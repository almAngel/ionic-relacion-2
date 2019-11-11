import { Injectable } from '@angular/core';
import { Task } from '../plainobjects/task';
import { TaskType } from 'src/enums/tasktype';
import { TaskComponent } from '../components/task/task.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddtaskService {

    public taskList: Task[];

    constructor() { 
        this.taskList = [];
    }

    addTask(task: Task) {
        task.id = this.taskList.length;
        this.taskList.push(task);
    }

    deleteTask(id: number) {
        delete this.taskList[id];
    }

    editTask(id: number, newTask: Task) {
        this.taskList[id] = newTask;
    }

}
