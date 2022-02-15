import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { SignalRService } from 'src/app/services/signalr.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  userName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sr: SignalRService,
    private us: UserService,
    private cs: ChatService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const channelIdFromRoute = routeParams.get('channelId');
    console.log(channelIdFromRoute);
    if (channelIdFromRoute !== 'jim')
      this.router.navigate(['/app-four-zero-four']);
  }
  handleClick($event:any) {
    this.us.setUser(this.userName);
    this.cs.sendChat(' has joined the channel');
    this.router.navigate(['/channel/jim']);
  }
}
