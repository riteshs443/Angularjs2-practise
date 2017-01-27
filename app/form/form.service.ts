import { Injectable } from '@angular/core';
@Injectable()
export class NameService {
  
  names = 'Pascal';
  course = 'mca';
  
  getName() {
    return this.names;
  }

  getcourse(){
   return this.course;
  }
}