import {ItemList} from "./ItemList";

export interface ListTMDB {
    page: number;
    results: Array<ItemList>;
    total_pages: number;
    total_results: number;
}
