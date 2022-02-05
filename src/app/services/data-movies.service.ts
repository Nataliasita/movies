import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientJsonpModule, JsonpClientBackend } from '@angular/common/http';

import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DataMoviesService {

private apiKey:string="12de258868edec7f2883089aee6a60ec";
private urlMovieDB:string="https://api.themoviedb.org/3/"


  constructor( private http:HttpClient) { 

  }
  getList(id:string){
      //https://api.themoviedb.org/3/movie/419704?api_key=e4500ded31029b9e96905a77971a355b&language=es
      let url=`${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=`
          return this.http.get(url).pipe(map((res:any)=>res.json()))
      
        }
        

}
