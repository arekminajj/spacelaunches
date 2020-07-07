export interface Agency {
        id: number;
        name: string;
        abbrev: string;
        countryCode: string;
        type: number;
        infoURL?: any;
        wikiURL: string;
        infoURLs: string[];
    }

    export interface Launch {
        id: number;
        name: string;
        windowstart: string;
        windowend: string;
        net: string;
    }

    export interface Mission {
        id: number;
        name: string;
        description: string;
        agencies: Agency[];
        type: number;
        typeName: string;
        launch: Launch;
        infoURL: string;
        wikiURL: string;
        events?: any;
        infoURLs: string[];
        changed: string;
        payloads: any[];
    }

    export interface MissionDetailsRootObject {
        missions: Mission[];
        total: number;
        count: number;
        offset: number;
    }
