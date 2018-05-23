import { BoundingBox } from "./bounding-box.type";

export class Image {
    prefixBase64: string = "data:image/png;base64,";
    imageBase64: string;

    boundingBox: BoundingBox;
    age: number;
    gender: string;
}