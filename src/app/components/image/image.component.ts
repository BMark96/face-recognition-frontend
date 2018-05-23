import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service'
import { Image } from '../../models/image.type';
import { FaceService } from '../../services/face.service';
import {Face} from '../../models/face.type';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  header: string;
  image: Image;
  faces: Face[];
  isImageLoaded: boolean;

  constructor(private imageService: ImageService, private faceService: FaceService) {}

  getAge() {
    return this.faces.length == 0 ? "" : this.faces[0].faceAttributes.age;
  }

  ngOnInit() {
    this.image = new Image;
    this.faces = [];
  }

  onFileUploaded(event) {
    var data = event.target.files[0];
    this.imageService.readImageAsBase64(data, this.onImageLoaded.bind(this));
  }
  
  onImageLoaded(imageEncoded) {
    this.image.imageBase64 = imageEncoded;
    this.isImageLoaded = true;

    this.getFaces();
  }

  getFaces() {
    this.faceService.getFaces(this.image.imageBase64).subscribe(faces => this.faces = faces);
  }

  onImageDeleted() {
    this.image.imageBase64 = "";
    this.isImageLoaded = false;
  }

  getImageSrc() {
    return this.isImageLoaded ? this.imageService.getImageSrc(this.image) : "";
  }

  // getCardHeader() {
  //   return this.cardService.getHeader();
  // }

  // setCardHeader(name) {
  //   this.cardService.setHeader(name);
  // }
}
