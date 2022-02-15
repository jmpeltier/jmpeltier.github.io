
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-four-zero-four',
  templateUrl: './four-zero-four.component.html'
})
export class FourZeroFourComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
}
