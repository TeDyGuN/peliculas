import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: any;
  movie: Movie;
  imageUrl = environment.imagesEndpoint;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { 
     activatedRoute.params.subscribe( params => {
      this.id = params.id;
     });
     this.movie = new Movie(false, '', [], 0, '', '', '', 0, '', '', '', false, 0, 0, '');
  }

  ngOnInit(): void {
    this.movieService.getDetailsMovie(this.id)
      .subscribe( (resp: any) => {
        this.movie = resp;
        console.log(this.movie);
      });
  }
  

}
