import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ChatMessage, ContractType } from '../models/contracts';
import { SignalRService } from './signalr.service';
import { UserService } from './user.service';

export class ChatObject
{
   sender: string="";
   message: string="";
}


@Injectable({
  providedIn: 'root',
})


export class ChatService {
  _userName: string = '';
  chatMessages$ :BehaviorSubject<ChatObject[]> = new BehaviorSubject<ChatObject[]>([]);

  constructor(private sr: SignalRService, private us: UserService) {
    this.sr.newMessage.subscribe((value) => {
      const msg = JSON.parse(value.message);

      if (msg.type === ContractType.ChatMessage) {
       // const chatMessage = msg.message;
        let myChats = this.chatMessages$.getValue();
        let co = new ChatObject();
        co.sender = value.user;
        co.message = msg.message;
        myChats.push(co);
        this.chatMessages$.next(myChats);
      }
    });
  }

  public sendChat(chatMessage: string) {
    const msg: ChatMessage = {
      type: ContractType.ChatMessage,
      message: chatMessage,
    };
    this.sr.sendMessage(this.us.getUser(), JSON.stringify(msg));
  }
}
