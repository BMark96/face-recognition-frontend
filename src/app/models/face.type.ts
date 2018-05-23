import { BoundingBox } from "./bounding-box.type";

export interface Face {
    "faceId": string,
    "faceRectangle": BoundingBox,
    "faceAttributes": {
        "age": number,
        "gender": string
    }
}