
    export interface Agency {
        id: number;
        name: string;
        abbrev: string;
        countryCode: string;
        type: number;
        infoURL?: any;
        wikiURL: string;
        changed: string;
        infoURLs: string[];
    }

    export interface Pad {
        id: number;
        name: string;
        infoURL: string;
        wikiURL: string;
        mapURL: string;
        latitude: number;
        longitude: number;
        agencies: Agency[];
    }

    export interface Location {
        pads: Pad[];
        id: number;
        name: string;
        infoURL: string;
        wikiURL: string;
        countryCode: string;
    }

    export interface Agency2 {
        id: number;
        name: string;
        abbrev: string;
        countryCode: string;
        type: number;
        infoURL?: any;
        wikiURL: string;
        changed: string;
        infoURLs: string[];
    }

    export interface Rocket {
        id: number;
        name: string;
        configuration: string;
        familyname: string;
        agencies: Agency2[];
        wikiURL: string;
        infoURLs: string[];
        infoURL: string;
        imageSizes: number[];
        imageURL: string;
    }

    export interface Lsp {
        id: number;
        name: string;
        abbrev: string;
        countryCode: string;
        type: number;
        infoURL?: any;
        wikiURL: string;
        changed: string;
        infoURLs: string[];
    }

    export interface Launch {
        id: number;
        name: string;
        windowstart: string;
        windowend: string;
        net: string;
        wsstamp: number;
        westamp: number;
        netstamp: number;
        isostart: string;
        isoend: string;
        isonet: string;
        status: number;
        inhold: number;
        tbdtime: number;
        vidURLs: any[];
        vidURL?: any;
        infoURLs: any[];
        infoURL?: any;
        holdreason?: any;
        failreason?: any;
        tbddate: number;
        probability: number;
        hashtag?: any;
        changed: string;
        location: Location;
        rocket: Rocket;
        missions: any[];
        lsp: Lsp;
    }

    export interface LaunchDetailsRootObject {
        launches: Launch[];
        total: number;
        offset: number;
        count: number;
    }



