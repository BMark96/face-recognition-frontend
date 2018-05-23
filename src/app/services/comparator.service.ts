import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Image } from "../models/image.type";
import { FaceService } from "./face.service";

@Injectable()
export class ComparatorService {
    constructor(private faceService: FaceService) {}

    private firstImageContainsFace: boolean = false;
    private secondImageContainsFace: boolean = false;
    private firstFaceId: string;
    private secondFaceId: string;
    private nextId: number = 1;
    private confidence: number = 0;

    setFaceId(id, faceId) {
        id == 1 ? this.firstFaceId = faceId : this.secondFaceId = faceId;
    }

    getNextId() {
        let id = this.nextId;
        this.nextId += 1;
        return id;
    }

    getNImagesWithFaces() {
        return (this.firstImageContainsFace ? 1 : 0) + (this.secondImageContainsFace ? 1 : 0);
    }

    setImageContainsFace(id, value) {
        id == 1 ? this.firstImageContainsFace = value : this.secondImageContainsFace = value;
        if(this.getNImagesWithFaces() == 2) {
            this.compare();
        }
        else {
            this.confidence = 0;
        }
    }

    compare() {
        this.faceService.getSimilarity(this.firstFaceId, this.secondFaceId).subscribe(
            result=>{
                this.confidence = result[0].confidence;
            }
        );
    }

    getConfidence() {
        return this.confidence;
    }

    getMessage() {
        let message = "";
        switch(this.getNImagesWithFaces()) {
            case 0:
                message = "Upload 2 more images containing a face";
                break;
            case 1:
                message = "Upload 1 more image containing a face";
                break;
            case 2:
                message = "Similarity: " + (this.confidence * 100).toFixed(2) + "%";
                break;
            default: 
                break;
        }
        return message;

    } 

}