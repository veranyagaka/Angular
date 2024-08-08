import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  editable = false;
  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();
  saveItem(description: string){
    if(!description) return;
    this.editable=false;
    this.item.description=description;
  }
  favouriteFramework = '';
  showFramework(){
    alert(this.favouriteFramework);
  }
}
