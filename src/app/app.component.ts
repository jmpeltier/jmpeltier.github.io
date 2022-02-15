
import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ContractType } from './models/contracts';
import { SignalRService } from './services/signalr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'interviewApp';
  showLogo: boolean = true;

  constructor(
    private sr: SignalRService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.sr.newMessage.subscribe((value) => {
      // console.log('Subscription got', value); 
      const msg = JSON.parse(value.message);

      if (msg.type === ContractType.HideLogo) {
        this.showLogo = !msg.hide;
      }
      if (msg.type === ContractType.ChangeBG) {
        this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = msg.bg;
      }
    
    });
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#08233d';
}
}
