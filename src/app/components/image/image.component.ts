import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageId: number = 1;
  imageUrl: string;
  constructor() { 
    //this.imageUrl = Math.random() < 0.5 ? "https://material.angular.io/assets/img/examples/shiba2.jpg" : "https://material.angular.io/assets/img/examples/shiba1.jpg";
    this.imageUrl = "../../../assets/image_empty.png"
  }

  ngOnInit() {
  }

}
