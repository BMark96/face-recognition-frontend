import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/rx";
import { Image } from "../models/image.type";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Face } from '../models/face.type';
import { Observable } from "rxjs";
import { Similarity } from "../models/similarity.type";

@Injectable()
export class FaceService {
    constructor(private http: HttpClient) {}

    //private subscriptionKey: string = "5b777f9876f749e198bd4bb52ef7eeef";
    private subscriptionKey: string = "ad22a1edffd6416fafa7725a7ce11513";
    private endpoint: string = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/";

    private createBlob(imageBase64, contentType='') {
        const byteCharacters = atob(imageBase64);
        let byteNumbers = new Array(byteCharacters.length);
        
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);
        let blob = new Blob([byteArray], {type: contentType});
        return blob;
    }

    private getHeaders(contentType) {
        const headers = new HttpHeaders()
            .set('Content-Type', contentType)
            .set('Ocp-Apim-Subscription-Key', this.subscriptionKey);
    
        return headers;
    }

    private getParams() {
        const params = new HttpParams()
            .set('returnFaceId', 'true')
            .set('returnFaceLandmarks', 'false')
            .set('returnFaceAttributes', 'age,gender');
        
        return params; 
    }

    getFaces(base64Image): Observable<Face[]> {
        const headers = this.getHeaders('application/octet-stream');
        const params = this.getParams();
        const blob = this.createBlob(base64Image);

        return this.http.post<Face[]>(
            this.endpoint + "detect",
            blob,
            {
                params,
                headers
            }
        );  
    }

    getSimilarity(faceId1, faceId2): Observable<Similarity[]> {
        const headers = this.getHeaders('application/json');

        return this.http.post<Similarity[]>(
            this.endpoint + "findsimilars",
            {
                "faceId": faceId1,
                "faceIds": [faceId2],
                "maxNumOfCandidatesReturned": 1,
                "mode": "matchFace"
            },
            {
                headers
            }
        );  
    }
}