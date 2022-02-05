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

  notesArray: DataNotes[] =[
    {id:1,title:'Cruella', description:'',image:'assets/images/cruella-poster.jpg',},
    {id:2,title:'Encanto', description:'',image:'assets/images/encanto.jpg',},
    {id:3,title:'La casa Gucci', description:'', image:'assets/images/gucci.jpg',},
    {id:4,title:'Sing 2', description:' ',image:'assets/images/onesheet.jpg',},
    {id:5,title:'Spiderman', description:' ',image:'assets/images/spider.png',},
    {id:6,title:'Tunka', description:'',image:'assets/images/tunka.jpg',},
    {id:7,title:'Avengers', description:' ',image:'assets/images/avengers.png',},
    {id:8,title:'Harry Potter', description:' ',image:'assets/images/potter.jpg',},
    {id:9,title:'Coco', description:'',image:'assets/images/coco.png',},
    {id:10,title:'Mandalorian', description:' ',image:'assets/images/manda.jpg',},
    {id:11,title:'Moonfall', description:'',image:'assets/images/moonfall.jpg',},
    {id:12,title:'Luca', description:'',image:'assets/images/luca.png',},
    {id:13,title:'El callejon de las almas perdidas', description:'',image:'assets/images/calle.jpg',},
    {id:14,title:'Harry Potter ', description:'',image:'assets/images/harry.png',},
    {id:15,title:'Superpower Dogs', description:' ',image:'assets/images/dog.jpg',},
    {id:16,title:'Divergente', description:' ',image:'assets/images/divergente.jpg',},
    {id:17,title:'Avengers Infinity War', description:' ',image:'assets/images/infinity.png',},
    {id:18,title:'Jurassic World', description:' ',image:'assets/images/dinosaur.jpg',},
    {id:19,title:'Iron Man', description:' ',image:'assets/images/iron.jpg',},
    {id:20,title:'Avatar', description:'',image:'assets/images/avatar.jpg',},

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


