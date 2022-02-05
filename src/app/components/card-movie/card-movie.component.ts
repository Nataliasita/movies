import { Component, OnInit } from '@angular/core';

import { DataMoviesService } from '../../services/data-movies.service'
import{ DataNotes } from 'src/app/models/data-notes'



@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  movList:Array<any>=[];

  notesArray: DataNotes[] = [
    {id:1,title:'Note 1', description:'here you can create'},
    {id:2,title:'Note 2', description:'here you can edit'},
    {id:3,title:'Note 3', description:'here you can delete'},
    {id:4,title:'Note 4', description:'and much more '}
  ];

  constructor(private servicesM:DataMoviesService) {
    servicesM.getList('id').subscribe((res:any)=>{
        this.movList = res.results;
        console.log(this.movList)
    })
     
    }
   


    ngOnInit() {

    }
 
   }


