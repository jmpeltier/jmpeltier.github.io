import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ContractType } from 'src/app/models/contracts';
import { ImageStore } from 'src/app/models/images';
import { ChatObject, ChatService } from 'src/app/services/chat.service';
import { SignalRService } from 'src/app/services/signalr.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
})
export class ChannelComponent implements OnInit {
  images: any[] = [];
  displayIndex: number = 0;
  showNaviagation = false;
  chatMessages: ChatObject[] = [];
  messageToSend: string = '';


  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  userName : string="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sr: SignalRService,
    private ref: ChangeDetectorRef,
    private us: UserService,
    private cs: ChatService

  ) {
    this.images = ImageStore.images;
  }

  get activeIndex(): number {
    return this.displayIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this.displayIndex = newValue;
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const channelIdFromRoute = routeParams.get('channelId');
    console.log(channelIdFromRoute);
    if (channelIdFromRoute !== 'jim')
      this.router.navigate(['/app-four-zero-four']);
    this.userName = this.us.getUser();

    this.sr.newMessage.subscribe((value) => {
      // console.log('Subscription got', value); 
      const msg = JSON.parse(value.message);

      if (msg.type === ContractType.SetSlide && value.user == "Admin") {
        this.activeIndex = msg.activeSlide;
        this.ref.detectChanges();
      }

      if (msg.type === ContractType.AllowNavigation && value.user == "Admin") {
        this.showNaviagation = msg.allowNavigation;
        this.ref.detectChanges();
      }
      

    });

    this.cs.chatMessages$.subscribe((value) => {
      this.chatMessages = value;
    });

  }

  getColor( sender : string)
  {
    if (sender == 'Admin')
      return 'red';
    else if  ( sender == this.us.getUser())
      return 'green';
    else 
      return 'blue';
  }
  messageToSendClick(event: any){
    this.cs.sendChat(this.messageToSend);
    this.messageToSend = '';
  }
}
