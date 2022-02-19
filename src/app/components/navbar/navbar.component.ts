import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: 'chat-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent{
  constructor(public accountService: AccountService,
    private router: Router){}

  handleLogout(){
    this.accountService.logout().subscribe(() => this.router.navigate(['', 'login']));
  }
}