import {InfoMediaType} from "./InfoMediaType";

export interface FavoriteMovie {
    page: number;
    results: Array<InfoMediaType>;
    total_pages: number;
    total_results: number;
}
