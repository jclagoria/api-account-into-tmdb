import {makeTMDBRequest} from '../../infrastructure/external/tmdbAPI'
import {AccountSuccess} from '../../domain/models/AccountSuccess'
import {FavoriteMovieRequest} from '../../domain/request/FavoriteMovieRequest'
import {WatchListRequest} from "../../domain/request/WatchListRequest";

export async function markMovieAsFavorite(accountId: string, command: FavoriteMovieRequest): Promise<AccountSuccess> {
    return makeTMDBRequest<AccountSuccess>({
        method: 'POST',
        url: `/account/${accountId}/favorite`,
        data : command,
    })
}

export async function addMediaIdTOWatchlist(accountId: string, command: WatchListRequest): Promise<AccountSuccess> {
    return makeTMDBRequest<AccountSuccess>({
        method: 'POST',
        url: `/account/${accountId}/watchlist`,
        data: command,
    })
}
