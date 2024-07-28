import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = '';

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.setName(this.name);
    console.log('Form Submitted:', this.name);
  }
}
