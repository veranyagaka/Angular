import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  constructor(private router: Router) {}

  sendData() {
    const data = { name: 'John Doe', age: 30 }; // example data
    this.router.navigate(['/target'], { queryParams: data });
  }
  formData = {
    name: '',
    age: null
  };
  submitForm() {
    if (this.formData.name && this.formData.age !== null) {
      this.router.navigate(['/target'], { queryParams: this.formData });
    }
  }
}
