import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Item} from "./item"
import {ItemComponent} from "./item/item.component"
import { RouterLink,RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormControl,FormGroup ,Validators} from '@angular/forms';
import { UserService } from './app.service';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule,ItemComponent,RouterOutlet,RouterLink,ReactiveFormsModule],

})

export class AppComponent {
  userService =inject(UserService)
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
