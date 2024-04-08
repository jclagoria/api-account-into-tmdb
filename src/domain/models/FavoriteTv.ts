import {TvMediaType} from "./TvMediaType";

export interface FavoriteTv {
    page: number;
    results: Array<TvMediaType>;
    total_pages: number;
    total_results: number;
}
