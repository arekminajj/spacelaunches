export interface Launch {
    id: number;
    name: string;
    windowstart: string;
    windowend: string;
    net: string;
    status: number;
    tbdtime: number;
    vidURLs: string[];
    vidURL?: any;
    tbddate: number;
    probability: number;
    changed: string;
    lsp: string;
}

export interface LaunchRootObject {
    launches: Launch[];
    total: number;
    offset: number;
    count: number;
}