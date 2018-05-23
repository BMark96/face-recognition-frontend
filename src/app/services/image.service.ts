import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Image } from "../models/image.type";

@Injectable()
export class ImageService {
    constructor() {}

    getImageSrc(image: Image) {
        return image.prefixBase64 + image.imageBase64;
    }

    readImageAsBase64(data, callback) {
        var reader = new FileReader();

        reader.onload = (e: Event & { target: { result: string } }) => {
            var binaryString = e.target.result;
            var imageEncoded = btoa(binaryString);
            callback(imageEncoded);
        }

        reader.readAsBinaryString(data);
    }
}