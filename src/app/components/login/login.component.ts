import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserInterface } from "src/app/interfaces/user.interface";
import { AccountService } from "src/app/services/account.service";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent{
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService){}

  login(){
    this.accountService.login(this.form.value).subscribe(() => this.router.navigate(['', 'chat']));
  }
}