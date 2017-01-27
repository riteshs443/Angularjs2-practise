import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.component.html',
  styleUrls: ['./app/home/home.component.css'],
})

export class HomeComponent {
 ritesh="my first angularjs app";
  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  model = new Heross(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  riteshname='';
  riteshcourse='';
  riteshcollege='';
  onSubmit(name:string,course:string,college:string) { 
	  this.submitted = true; 
	  this.riteshname=name;
	  this.riteshcourse=course;
	  this.riteshcollege=college;
  }
}

export class Heross {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string) {  }
}
