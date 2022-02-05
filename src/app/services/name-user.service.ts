import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameUserService {

  @Output() shareName:EventEmitter<any>= new EventEmitter();

  constructor() { }
}
