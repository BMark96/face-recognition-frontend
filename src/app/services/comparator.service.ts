import { Injectable } from "@angular/core";

import { Image } from "../models/image.type";
import { FaceService } from "./face.service";

@Injectable()
export class ComparatorService {
    constructor(private faceService: FaceService) {}

    private firstImageContainsFace: boolean = false;
    private secondImageContainsFace: boolean = false;
    private firstFaceId: string;
    private secondFaceId: string;
    private confidence: number = null;
    private isLoading = false;

    /**
     * Set FaceId of cards. FaceId value is used for comparison by Microsoft Face API.
     * @param id  Id of card.
     * @param faceId  FaceId of the face having the largest bounding box.
     */
    setFaceId(id, faceId) {
        id == 1 ? this.firstFaceId = faceId : this.secondFaceId = faceId;
    }

    /**
     * Get number of cards having images containing faces.
     * @returns       Number of cards with face image.
     */
    getNImagesWithFaces() {
        return (this.firstImageContainsFace ? 1 : 0) + (this.secondImageContainsFace ? 1 : 0);
    }

    /**
     * Set boolean value that stores if the image on card contains at least 1 face.
     * @param id  Id of card.
     * @param value  True if image stores at least 1 face, false otherwise.
     */
    setImageContainsFace(id, value) {
        id == 1 ? this.firstImageContainsFace = value : this.secondImageContainsFace = value;
        if(this.getNImagesWithFaces() == 2) {   // Both images with faces uploaded
            this.compare();
        }
        else {
            this.confidence = null;
        }
    }

    /**
     * Compare 2 faces using FaceService. Sets confidence value.
     */
    compare() {
        this.faceService.getSimilarity(this.firstFaceId, this.secondFaceId).subscribe(
            result=>{
                this.confidence = result[0].confidence; // Setting confidence when value arrives
            }
        );
    }

    /**
     * Get feedback message shown in second line of toolbar.
     * @returns       Toolbar message.
     */
    getMessage() {
        if(this.isLoading) {
            return "loading..."
        }

        let message = "";
        switch(this.getNImagesWithFaces()) {
            case 0:
                message = "Upload 2 more images containing a face";
                break;
            case 1:
                message = "Upload 1 more image containing a face";
                break;
            case 2:
                this.confidence ? (message = "Similarity: " + (this.confidence * 100).toFixed(2) + "%") : message = "Similarity: loading...";
                break;
            default: 
                break;
        }
        return message;
    } 

    /**
     * Set boolean value that stores if waiting for toolbar message.
     * @param value  True if waiting, false otherwise.
     */
    setIsLoading(value) {
        this.isLoading = value;
    }
}