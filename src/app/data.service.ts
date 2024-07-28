import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private name: string = '';

  constructor() { }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
