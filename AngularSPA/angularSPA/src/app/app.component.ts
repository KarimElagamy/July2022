import { Component } from '@angular/core';
import { AccountService } from './Core/Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular SPA';

  constructor(private accountService:AccountService) { }

  ngOnInit(){
    //Add code to check for JWT token to combat reload issue
    if (localStorage.getItem('token') != null){
      this.accountService.validateJWT();
    };
  }

}
