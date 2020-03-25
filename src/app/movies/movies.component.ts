import { Component } from '@angular/core';
import { Movies } from './movie.datasource';


@Component({
    selector:'movies',//<div class="movies"></"div>
    templateUrl:'movies.component.html'
})
export class MoviesComponent
{
    title='Movie List';
    movies=Movies;
}