import { Injectable } from "@angular/core";

import { Image } from "../models/image.type";

@Injectable()
export class ImageService {
    constructor() {}

    /**
     * Get Base64 source of image.
     * @param image   Image that stores Base64 prefix and content.
     * @returns       Image source.
     */
    getImageSrc(image: Image) {
        return image.prefixBase64 + image.imageBase64;
    }

    /**
     * Read image and convert it to Base64 string.
     * @param data   Image data.
     */
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