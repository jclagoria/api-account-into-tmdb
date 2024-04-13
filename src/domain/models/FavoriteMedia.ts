import {InfoMediaType} from "./InfoMediaType";

export interface FavoriteMedia {
    page: number;
    results: Array<InfoMediaType>;
    total_pages: number;
    total_results: number;
}
