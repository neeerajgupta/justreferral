import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FormsModule,
    PasswordModule,
   
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  value!: string;
  value1!: string
  value2!: string

  constructor(private router: Router) {}


  loginclick() {
    if (this.value1 === 'NeerajGupta' && this.value2 === 'Neeraj@123') {
      sessionStorage.setItem("isLogined", "true");
      this.router.navigate(['/dashboard']);
      // this.messageService.add({
      //   severity: 'danger',
      //   summary: 'Login SuccessFully',
      //   life: 5000
      // });
      
    } else {
      sessionStorage.setItem("isLogined", "false");
      // this.messageService.add({
      //   severity: 'danger',
      //   summary: 'UserId and Password are Incorrect',
      //   life: 5000
      // });
     
      alert("UserId:  "+this.value1+"  and Password:  "+this.value2+" are Incorrect")
    

    }
  }
}
