import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { AlertController } from '@ionic/angular';
import { resolve } from 'url';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {

  @Input('title') title: string;
  @Input('year') year: string;
  @Input('rated') rated: string;
  @Input('released') released: string;
  @Input('genre') genre: string;
  @Input('director') director: string;
  @Input('poster') poster: string;
  @Input('metascore') metascore: string;
  @Input('plot') plot: string;
  show: boolean = true;

  constructor(
    private filmService: FilmService,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  onClick() {
    this.show = !this.show;
  }

  async delete() {
    let alert = await this.alertController.create({
      header: 'Delete film',
      message: 'Are you sure you want to delete this film?',
      buttons: [
        {
          text: 'Don\'t delete',
        },
        {
          text: 'Delete',
          handler: () => {
            this.filmService.delete({
              Title: this.title,
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
