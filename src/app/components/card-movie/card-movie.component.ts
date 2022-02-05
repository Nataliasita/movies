import { Component, OnInit } from '@angular/core';

import { DataMoviesService } from '../../services/data-movies.service'


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  movList:Array<any>=[];

  constructor(private servicesM:DataMoviesService) {
    servicesM.getList('id').subscribe((res:any)=>{
        this.movList = res.results;
        console.log(this.movList)
    })
     
    }
   


    ngOnInit() {

    }
    goBack(){

    }
   }

