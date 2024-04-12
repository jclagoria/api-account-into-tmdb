import {RatedTvEpisodesItem} from "./RatedTvEpisodesItem";

export interface RatedTvEpisodes {
    page: number;
    results: Array<RatedTvEpisodesItem>;
    total_pages: number;
    total_results: number;
}
