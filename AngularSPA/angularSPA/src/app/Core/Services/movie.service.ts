import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Shared/Models/Movie';
import { MovieDetails } from 'src/app/Shared/Models/Movie-Details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("https://movieshopapi.azurewebsites.net/api/Movies/top-grossing");
  }

  getMovieDetails(id:number):Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>("https://movieshopapi.azurewebsites.net/api/Movies/" + id);
  }

  getMoviesByGenre(genreId:number){

  }

}
