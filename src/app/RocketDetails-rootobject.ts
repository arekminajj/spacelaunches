    export interface Family {
        id: number;
        name: string;
        agencies: string;
    }

    export interface Rocket {
        id: number;
        name: string;
        configuration: string;
        defaultPads: string;
        family: Family;
        infoURL?: any;
        wikiURL: string;
        infoURLs: string[];
        imageSizes: number[];
        imageURL: string;
        changed: string;
    }

    export interface RocketDetailsRootObject {
        rockets: Rocket[];
        total: number;
        count: number;
        offset: number;
    }
