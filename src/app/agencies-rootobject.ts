    export interface Agency {
        id: number;
        name: string;
        countryCode: string;
        abbrev: string;
        type: number;
        infoURL: string;
        wikiURL: string;
        infoURLs: string[];
        islsp: number;
        changed: string;
    }

    export interface AgenciesRootObject {
        agencies: Agency[];
        total: number;
        count: number;
        offset: number;
    }

