import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  host: {
    'class': 'app-sidebar-container',
  }
})
export class Sidebar {

}
