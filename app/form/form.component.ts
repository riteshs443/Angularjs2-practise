import {Component} from '@angular/core';
import { NameService } from './form.service';

@Component({
  selector: 'forms',
  templateUrl: './app/form/form.component.html',
  styleUrls: ['./app/form/form.component.css'],
  providers: [NameService],
})

export class FormComponent {
	countrylist=['India','Pakistan','america'];
	 title = 'Tour of Heroes';
     heroes = [
	    new Hero(1, 'Windstorm'),
	    new Hero(13, 'Bombasto'),
	    new Hero(15, 'Magneta'),
	    new Hero(20, 'Tornado')
	    ];
    myHero = this.heroes[0];

    clickMessage = '';

    onClickMe() {
      this.clickMessage = 'You are my hero!';
    }

    values = '';

    onKey(event:any) { // without type info
      this.values += event.target.value + ' | ';
    }

  names:string;
  abcd:string

  constructor(private nameService: NameService) {}
 
  
  ngOnInit() {
    this.names = this.nameService.getName();
    this.abcd = this.nameService.getcourse();
  }


}

export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}

