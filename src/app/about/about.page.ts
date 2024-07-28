import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  name: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = this.dataService.getName();
  }
}
