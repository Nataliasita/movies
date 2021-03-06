import { Component, Input, OnInit } from '@angular/core';

import { NameUserService } from '../../services/name-user.service'


@Component({
  selector: 'app-cataloge',
  templateUrl: './cataloge.component.html',
  styleUrls: ['./cataloge.component.css']
})
export class CatalogeComponent implements OnInit {

  constructor(private serviceName: NameUserService) { }
  public listnameUser:Array<any>= [];
  
  ngOnInit(): void {
    this.serviceName.shareName.subscribe(data =>{
      console.log('recibiendo data...', data)
      
      
      // this.h=data.data.name
      // console.log(this.h)
      // this.listnameUser.push(data.data)
      this.listnameUser.push(data.data)
  

    })
}



}