import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "src/app/services/account.service";

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent{

  form = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService){}

  register(){
    this.accountService.register(this.form.value).subscribe(() => this.router.navigate(['','login']));
  }
}