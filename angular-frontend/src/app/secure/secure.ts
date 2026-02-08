import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Navbar } from './navbar/navbar'; 

@Component({
  selector: 'app-secure',
  standalone: true,
  imports: [Sidebar, Navbar],
  templateUrl: './secure.html',
  styleUrls: ['./secure.css'],
})
export class Secure {

}
