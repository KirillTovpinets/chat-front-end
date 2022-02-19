import { Component, Output, EventEmitter, HostListener, Input } from "@angular/core";
import { UserInterface } from "src/app/interfaces/user.interface";

@Component({
  selector: 'chat-user-card',
  template: `<div class="user-card"
    [class.active]="isActive"
  >
    <img src="https://loremflickr.com/320/240"
        [alt]="user?.firstname"
        class="avatar"
    />
    <p class="username">{{user?.firstname}}</p>
  </div>`,
})
export class UserCardComponent{
  @Input() user: UserInterface | null = null;
  @Input() isActive = false;

  @Output() selectUser: EventEmitter<string> = new EventEmitter();

  @HostListener('click')
  clickCard(){
    this.selectUser.emit(this.user?._id)
  }
}