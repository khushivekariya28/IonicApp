import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  constructor(private dataService: DataService) {}

  onSubmit(form: NgForm) {
    this.dataService.setFormData(form.value);
    console.log('Form Submitted:', form.value);
  }
}
