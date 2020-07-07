    export interface Mission {
        id: number;
        name: string;
        description: string;
        type: number;
        infoURL: string;
        wikiURL: string;
        infoURLs: string[];
        changed: string;
    }

    export interface MissionRootObject {
        missions: Mission[];
        total: number;
        count: number;
        offset: number;
    }
