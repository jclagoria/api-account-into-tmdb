import {RatedMovieItem} from "./RatedMovieItem";

export interface RatedMovie {
    page: number;
    results: Array<RatedMovieItem>;
    total_pages: number;
    total_results: number;
}
