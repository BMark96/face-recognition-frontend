import { Component, OnInit } from '@angular/core';

import { Image } from '../../models/image.type';
import { Face } from '../../models/face.type';
import { BoundingBox } from '../../models/bounding-box.type';

import { FaceService } from '../../services/face.service';
import { ImageService } from '../../services/image.service';
import { ComparatorService } from '../../services/comparator.service';
import { IdProviderService } from '../../services/id-provider.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  header: string = "No image with face";
  isImageLoaded: boolean;
  private id: number;
  private image: Image;
  private faces: Face[] = [];

  constructor(
    private imageService: ImageService, 
    private faceService: FaceService, 
    private comparatorService: ComparatorService,
    private idProviderService: IdProviderService
  ) {}

  /**
   * Initialization
   */
  ngOnInit() {
    this.image = new Image;
    this.id = this.idProviderService.getNextId(); // Generate id for card
  }

  /**
   * Get message shown on top of card
   * @returns       Card header message.
   */
  getHeader() {
    return this.faces.length == 0 ? "No image with face" : this.faces[0].faceAttributes.age + " year old " + this.faces[0].faceAttributes.gender;
  }

  /**
   * Event handler for handling file upload button clicks.
   * @param event  Event object containing the chosen file.
   */
  onFileUploaded(event) {
    var data = event.target.files[0];
    this.imageService.readImageAsBase64(data, this.onImageLoaded.bind(this)); // Base64 conversion, call onImageLoaded() when ready
  }
  
  /**
   * Called when base64 conversion is ready. Sets base64 string, calls face searching method.
   * @param imageEncoded  Base64 encoded image.
   */
  onImageLoaded(imageEncoded) {
    this.image.imageBase64 = imageEncoded;
    this.isImageLoaded = true;

    this.getFaces();  // Search for faces when image is loaded
  }

  /**
   * Looking for faces using FaceService.
   */
  getFaces() {
    this.header = "loading...";
    this.comparatorService.setIsLoading(true);
    this.faceService.getFaces(this.image.imageBase64).subscribe(
      faces => {
        this.faces = faces;
        this.comparatorService.setIsLoading(false);
        if(this.faces.length > 0) { // found faces
          this.comparatorService.setFaceId(this.id, this.faces[0].faceId);
          this.comparatorService.setImageContainsFace(this.id, true);
          this.header = this.faces[0].faceAttributes.age + " year old " + this.faces[0].faceAttributes.gender;
        } else {  // no faces found
          this.comparatorService.setImageContainsFace(this.id, false);
          this.header = "No image with face";
        }
      }
    ); 
  }

  /**
   * Event handler for handling file delete button clicks. Deletes base64 encoded image.
   */
  onImageDeleted() {
    this.image.imageBase64 = "";
    this.isImageLoaded = false;
    this.comparatorService.setImageContainsFace(this.id, false);
    this.comparatorService.setIsLoading(false);
    this.header = "No image with face";
  }

  /**
   * Get base64 source of image that can be used as src in img HTML tag. Uses ImageService.
   * @returns       Base64 source of image.
   */
  getImageSrc() {
    return this.isImageLoaded ? this.imageService.getImageSrc(this.image) : "";
  }

  // getBoundingBoxes() {
  //   let boundingBoxes = new Array<BoundingBox>();
  //   for(let i = 0; i < this.faces.length; i++) {
  //     boundingBoxes.push(this.faces[i].faceRectangle);
  //   }
  //   return boundingBoxes;
  // }
}
