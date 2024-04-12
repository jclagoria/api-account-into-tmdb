import {WatchListMovieItem} from "./WatchListMovieItem";

export interface WatchListMovieTMDB {
    page: number;
    results: Array<WatchListMovieItem>;
    total_pages: number;
    total_results: number;
}
