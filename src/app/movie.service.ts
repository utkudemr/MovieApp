import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movies/movie.datasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies():Movie[]
  {
    return Movies;
  }
}
