
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'interviewApp';

  images: any[]=[];

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

  ngOnInit() {
    this.images = [
          {
              "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria1.jpg",
              "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria1s.jpg",
              "alt": "Description for Image 1",
              "title": "Title 1"
          },
          {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria2.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria2s.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        }

        ];
        console.log(this.images);
  }
}
