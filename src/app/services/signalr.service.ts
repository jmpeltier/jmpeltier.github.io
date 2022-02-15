import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

export interface messageSubject {
  user : string;
  message : string;
}


@Injectable({
  providedIn: 'root',
})

export class SignalRService {
  newMessage = new Subject<messageSubject>(); 
  
  connection = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:5261/chatHub')
    .build();

  constructor() {
    this.connection.on('ReceiveMessage', (user, message) => {
      let subj : messageSubject = { user : user, message : message };
      this.newMessage.next(subj);
      //console.log(user, "  ", message);
    });
    this.connection.start().catch((err) => document.write(err));
  }

  public sendMessage(user: string, message: string) {
    this.connection.invoke('SendMessage', user, message);
  }
}
