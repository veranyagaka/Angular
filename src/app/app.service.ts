import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class UserService{
    //methods
    cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

    getCars(): string[] {
      return this.cars;
    }

  }