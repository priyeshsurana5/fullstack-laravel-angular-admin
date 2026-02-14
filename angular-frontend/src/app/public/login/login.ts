import { Component ,OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
form!: FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,  private router: Router, private auth:Auth) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  } 
  submit():void{
    console.log(this.form.getRawValue,this.form.value);
    this.auth.login(this.form.value).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard'])
      }
    })

  }

}
