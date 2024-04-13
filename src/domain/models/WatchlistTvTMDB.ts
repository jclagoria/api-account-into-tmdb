import {WatchlistItem} from "./WatchlistItem";

export interface WatchlistTvTMDB {
    page: number;
    results: Array<WatchlistItem>;
    total_pages: number;
    total_results: number;
}
