export interface Face {
    "faceId": string,
    "faceRectangle": {
        "width": number,
        "height": number,
        "left": number,
        "top": number
    }, 
    "faceAttributes": {
        "age": number,
        "gender": string
    }
}