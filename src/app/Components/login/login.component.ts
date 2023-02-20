import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/login';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  invalidLogin=false;
  login: Login=new Login();

  constructor(private loginservice: LoginService, 
    private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void {
      
    }

    handleLogin(){
      console.log(this.login);
      this.loginservice.log(this.login).subscribe(
        data =>{
          console.log(data);
          if(data!=null){
            alert("Login Successful!!");
            this.router.navigate(['/players-list']);
            this.invalidLogin=false;
          }

          else{
            this.invalidLogin=true;
          }
        }
      )
    }

}
