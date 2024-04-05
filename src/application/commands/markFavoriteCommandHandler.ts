import {makeTMDBRequest} from '../../infrastructure/external/tmdbAPI'
import {AccountFavoriteMovie} from '../../domain/models/AccountFavoriteMovie'
import {FavoriteMovieRequest} from '../../domain/request/FavoriteMovieRequest'

export async function markMovieAsFavorite(accountId: string, command: FavoriteMovieRequest): Promise<AccountFavoriteMovie> {
    return makeTMDBRequest<AccountFavoriteMovie>({
        method: 'POST',
        url: `/account/${accountId}/favorite`,
        data : command,
    })
}
