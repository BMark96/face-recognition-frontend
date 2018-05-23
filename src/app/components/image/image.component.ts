import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service'
import { Image } from '../../models/image.type';
import { FaceService } from '../../services/face.service';
import { Face } from '../../models/face.type';
import { BoundingBox } from '../../models/bounding-box.type';
import { ComparatorService } from '../../services/comparator.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  header: string = "No image with face";
  id: number;
  image: Image;
  faces: Face[];
  isImageLoaded: boolean;

  constructor(private imageService: ImageService, private faceService: FaceService, private comparatorService: ComparatorService) {}

  getHeader() {
    return this.faces.length == 0 ? "No image with face" : this.faces[0].faceAttributes.age + " year old " + this.faces[0].faceAttributes.gender;
  }

  // getBoundingBoxes() {
  //   let boundingBoxes = new Array<BoundingBox>();
  //   for(let i = 0; i < this.faces.length; i++) {
  //     boundingBoxes.push(this.faces[i].faceRectangle);
  //   }

  //   return boundingBoxes;
  // }

  ngOnInit() {
    this.image = new Image;
    this.faces = [];
    this.id = this.comparatorService.getNextId();
  }

  onFileUploaded(event) {
    this.comparatorService.setImageContainsFace(this.id, false);
    this.header = "No image with face";
    var data = event.target.files[0];
    this.imageService.readImageAsBase64(data, this.onImageLoaded.bind(this));
  }
  
  onImageLoaded(imageEncoded) {
    this.image.imageBase64 = imageEncoded;
    this.isImageLoaded = true;

    this.getFaces();
  }

  getFaces() {
    this.faceService.getFaces(this.image.imageBase64).subscribe(
      faces => {
        this.faces = faces;
        if(this.faces.length > 0) {
          this.comparatorService.setFaceId(this.id, this.faces[0].faceId);
        }
        
        (this.faces.length > 0) ? this.comparatorService.setImageContainsFace(this.id, true) : this.comparatorService.setImageContainsFace(this.id, false);
        (this.faces.length == 0) ? this.header = "No image with face" : this.header = this.faces[0].faceAttributes.age + " year old " + this.faces[0].faceAttributes.gender;
      }); 
  }

  onImageDeleted() {
    this.image.imageBase64 = "";
    this.isImageLoaded = false;
    this.comparatorService.setImageContainsFace(this.id, false);
    this.header = "No image with face";
  }

  getImageSrc() {
    return this.isImageLoaded ? this.imageService.getImageSrc(this.image) : "";
  }
}
