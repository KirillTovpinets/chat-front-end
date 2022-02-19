import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { UserInterface } from "../interfaces/user.interface";
import { AccountService } from "./account.service";
import { ApiService } from "./api.service";
import { ChatService } from "./chat.service";

@Injectable({
  providedIn: 'root'
})
export class ChatStateService{
  userList: UserInterface[] = [];
  selectedRoomId: number | null = null;
  selectedUser?: string;
  roomId: string = '';
  messages = [];
  constructor(private chatService: ChatService,
    private accountService: AccountService,
    private apiService: ApiService){}

  getUsers(): Observable<UserInterface[]> {
    return this.apiService.executeGet('chat-users').pipe(
      tap((list) => this.userList = list)
    );
  }

  selectUser(id: string){
    this.selectedUser = id;
    this.messages = [];
    const roomId = this.accountService.currentUser?._id + id;
    this.roomId = roomId.split('').sort().join('');
    this.join();
  }

  join(){
    this.chatService.joinRoom({ user: this.accountService.currentUser?._id, roomId: this.roomId })
  }
}