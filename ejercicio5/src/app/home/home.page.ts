import { Component, OnInit } from '@angular/core';
import { AddtaskService } from '../services/addtask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private taskService: AddtaskService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add() {
    this.router.navigate(['/add']);
  }
}
