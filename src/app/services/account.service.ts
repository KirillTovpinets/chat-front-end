import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { RegisterInterface } from "../interfaces/register.interface";
import { UserInterface } from "../interfaces/user.interface";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService{
  currentUser: UserInterface | null = null;

  constructor(private apiService: ApiService){}

  login(credentials: RegisterInterface): Observable<UserInterface> {
    return this.apiService.executePost('login', credentials).pipe(
      tap((user) => this.currentUser = user)
    );
  }

  logout(){
    return this.apiService.executePost('logout');
  }

  register(userMeta: RegisterInterface): Observable<any>{
    return this.apiService.executePost('register', userMeta);
  }
}