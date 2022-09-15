import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Login } from 'src/app/Shared/Models/Login';
import { map } from 'rxjs';
import { Register } from 'src/app/Shared/Models/Register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  //Login component will call the login method in account service, the login method will push the values into the subject,
  //The private subjects can only be updated or set from inside this service, so that way its better for security since the other
  //components can just use the public observables to get the data without any chance to update the data. For example the header component
  //can subscribe to the isLoggedIn observable and get the latest value on whether the user is currently logged in or not, since the observable 
  //exposes the data in the subject but protects it from being updated outside of this service. This is a design pattern known as the Publish and Subscribe method

  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  Login(loginData:Login):Observable<boolean>{
    return this.httpClient.post<boolean>("https://movieshopapi.azurewebsites.net/api/Account/login", loginData).pipe(map((response:any) => {
      if (response){
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
    }))
  }

  Logout(){
    localStorage.removeItem('token');
  }

  Register(registerData:Register){
    
  }

}
