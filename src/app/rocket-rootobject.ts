    export interface Rocket {
        id: number;
        name: string;
        configuration: string;
        defaultPads: string;
        infoURL: string;
        wikiURL: string;
        infoURLs: string[];
        imageSizes: number[];
        imageURL: string;
        changed: string;
    }

    export interface RocketRootObject {
        rockets: Rocket[];
        total: number;
        count: number;
        offset: number;
    }
