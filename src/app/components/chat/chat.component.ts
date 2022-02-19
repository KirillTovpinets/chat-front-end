import { Component, OnInit } from "@angular/core";
import { UserInterface } from "src/app/interfaces/user.interface";
import { ChatStateService } from "src/app/services/chat-state.service";
import { ChatService } from "src/app/services/chat.service";

@Component({
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit{
  messages: Array<any> = [];
  currentUser: UserInterface | null = null;
  selectedUser: UserInterface | null = null;
  phone = '';
  messageText: string = '';

  constructor(private chatService: ChatService,
    public chatStateService: ChatStateService){ }

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((data: { user: string, message: string }) => {
      this.messages.push(data);
    } )
    this.chatStateService.getUsers().subscribe();
  }

  sendMessage(message: string){
    this.chatService.sendMessage({
      data: this.currentUser?._id,
      room: this.chatStateService.roomId,
      message: message
    })
    this.messageText = '';
  }

  handleSelectUser(id: string){
    this.chatStateService.selectUser(id)
  }
}