import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Image } from "../models/image.type";
import { Face } from '../models/face.type';
import { Similarity } from "../models/similarity.type";

@Injectable()
export class FaceService {
    constructor(private http: HttpClient) {}

    private subscriptionKey: string = "ad22a1edffd6416fafa7725a7ce11513";
    private endpoint: string = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/";

    /**
     * Create blob from Base64 image that can be sent to Microsoft Face API.
     * @param imageBase64   Base64 encoded image.
     * @returns             Blob can be sent to API.
     */
    private createBlob(imageBase64) {
        const byteCharacters = atob(imageBase64);
        let byteNumbers = new Array(byteCharacters.length);
        
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);
        let blob = new Blob([byteArray], {type: ''});
        return blob;
    }

    /**
     * Generate HTTP headers for HTTP post using content type and API subscription key.
     * @param contentType   Content type.
     * @returns             Generated headers. 
     */
    private getHeaders(contentType) {
        const headers = new HttpHeaders()
            .set('Content-Type', contentType)
            .set('Ocp-Apim-Subscription-Key', this.subscriptionKey);
    
        return headers;
    }

    /**
     * Generate HTTP params for HTTP post for getting faces.
     * @returns             Generated headers. 
     */
    private getParams() {
        const params = new HttpParams()
            .set('returnFaceId', 'true')
            .set('returnFaceLandmarks', 'false')
            .set('returnFaceAttributes', 'age,gender');
        
        return params; 
    }

    /**
     * Get faces using Microsoft Face API.
     * @param base64Image   Base64 image where the function looks for faces.
     * @returns             Observable for faces found.
     */
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

    /**
     * Get similarity using Microsoft Face API.
     * @param faceId1       Id of 1st face used for comparison.
     * @param faceId2       Id of 2nd face used for comparison.
     * @returns             Observable for similarities found.
     */
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