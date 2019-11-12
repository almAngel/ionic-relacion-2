import { Injectable } from '@angular/core';
import { Film } from '../plainobjects/film';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmList: Film[];
  filePath: string = "assets/films.json";

  constructor(private httpClient: HttpClient) { }

  async init() {
    this.filmList = await this.loadFile();
  }

  async loadFile(): Promise<any> {
    let result: Promise<any>;

    result = new Promise((resolve, reject) => {
      this.httpClient.get(this.filePath, { responseType: 'json' }).subscribe((data) => {
        resolve(data);
      });
    });

    return result;
  }

  delete(film: Film) {
    let i = this.filmList.findIndex((e) => {
      return (e.Title == film.Title);
    });
    delete this.filmList[i];
    this.filmList.sort();
  }

}
