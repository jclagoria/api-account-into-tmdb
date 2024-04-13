import {RatedTvItem} from "./RatedTvItem";

export interface RatedTvList {
    page: number;
    results: Array<RatedTvItem>;
    total_pages: number;
    total_results: number;
}
