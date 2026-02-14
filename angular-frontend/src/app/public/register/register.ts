import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  constructor(private http: HttpClient, private auth: Auth) { }
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  submit():void {
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.auth.register({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,    
      password:this.password
    
    }).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
      }
    })

  }
   
}
