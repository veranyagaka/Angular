import { Component, inject } from '@angular/core';
import { CommonModule,UpperCasePipe, LowerCasePipe,DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';
import {Item} from "./item"
import {ItemComponent} from "./item/item.component"
import { RouterLink,RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormControl,FormGroup ,Validators} from '@angular/forms';
import { UserService } from './app.service';
import { StarPipe } from './star.pipe';
import {ReversePipe} from './reverse.pipes';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  //template: `<p>Car Listing: {{ display }}</p>`,
  //template: `{{loudMessage | uppercase  }}`,
  /*template: `{{loudMessage | lowercase  }}
  <p>Number with decimal {{num |number:"3.2-2" }}</p>
  <h1>Birthday {{birthday| date: "medium" }}</h1>
  <h2>Currency  {{currency | currency}}</h2>
  <h1>Vera {{name | star }}</h1>
  <h3>Reverse {{name | reverse}}</h3>
  `,
*/
  styleUrl: './app.component.css',
  imports: [ReversePipe,CommonModule,ItemComponent,RouterOutlet,RouterLink,ReactiveFormsModule,UpperCasePipe,LowerCasePipe,DecimalPipe, DatePipe, CurrencyPipe,StarPipe],

})

export class AppComponent {
  name='Nyagaka';
  currency = 100;
  birthday = 27/11/1996;
  num = 1.234;
  loudMessage = 'Listen Vera';
  display='';
  /*
  //inject-based dependency injection

  userService =inject(UserService);

  constructor() {
    this.display = this.userService.getCars().join(' ⭐️ ');
}
    */
//constructor-based dependency injection
constructor(private userService: UserService) {
  this.display = this.userService.getCars().join(' ⭐️ ');
}
  profileForm=new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    //password: new FormControl
  })
  handleSubmit(){
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
  title = 'todo';
  componentTitle ='Veras To Do List';
  filter: "all"|"active"|"done" ="all";
  allItems=[
    {description: "eat", done: true},
    {description: "pray", done: false},
    {description: "sleep", done: true},
    {description: "work", done: false},
  ];
  
  addItem(description: string){
    if(!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }
  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
