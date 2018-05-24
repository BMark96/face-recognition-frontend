import { Injectable } from "@angular/core";

@Injectable()
export class IdProviderService {
    private nextId: number = 1;

    constructor() {}

    /**
     * Generate id for card.
     * @returns       Generated id.
     */
    getNextId() {
        let id = this.nextId;
        this.nextId += 1;
        return id;
    }
}
