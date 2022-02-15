import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SignalRService } from 'src/app/services/signalr.service';
import {
  ContractType,
  AllowNavigationMessage,
  SetSlide,
  HideLogoMessage,
  ChangeBG,
} from 'src/app/models/contracts';
import { UserService } from 'src/app/services/user.service';
import { ChatObject, ChatService } from 'src/app/services/chat.service';
import { ImageStore } from 'src/app/models/images';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  images: any[] = [];
  displayIndex: number = 0;
  checked: boolean = false;
  hideChecked: boolean = false;
  chatMessages: ChatObject[] = [];
  messageToSend: string = '';
  bgColor = '#ffffff';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sr: SignalRService,
    private us: UserService,
    private cs: ChatService
  ) {
    us.setUser('Admin');
    this.images = ImageStore.images;
  }

  get activeIndex(): number {
    return this.displayIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this.displayIndex = newValue;
      const msg: SetSlide = {
        type: ContractType.SetSlide,
        activeSlide: newValue,
      };
      this.sr.sendMessage(this.us.getUser(), JSON.stringify(msg));
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const channelIdFromRoute = routeParams.get('channelId');
    console.log(channelIdFromRoute);
    if (channelIdFromRoute !== 'jim')
      this.router.navigate(['/app-four-zero-four']);

    this.sr.newMessage.subscribe((value) => {
      // console.log('Subscription got', value); // Subscription wont get
      // anything at this point
    });

    this.cs.chatMessages$.subscribe((value) => {
      this.chatMessages = value;
    });

    console.log(this.images);
  }

  checkValue(event: any) {
    this.checked = event.checked;

    const msg: AllowNavigationMessage = {
      type: ContractType.AllowNavigation,
      allowNavigation: this.checked,
    };
    this.sr.sendMessage(this.us.getUser(), JSON.stringify(msg));

    this.activeIndex = (0);
    this.activeIndex = (this.activeIndex);
  }

  checkHideValue(event: any) {
    this.hideChecked = event.checked;

    const msg: HideLogoMessage = {
      type: ContractType.HideLogo,
      hide: this.hideChecked,
    };
    this.sr.sendMessage(this.us.getUser(), JSON.stringify(msg));

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

  updateBG(event: any){
    const msg: ChangeBG = {
      type: ContractType.ChangeBG,
      bg: this.bgColor,
    };
    this.sr.sendMessage(this.us.getUser(), JSON.stringify(msg));
  }
}
