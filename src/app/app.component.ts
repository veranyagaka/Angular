import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],

})
export class AppComponent {
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
  
}
