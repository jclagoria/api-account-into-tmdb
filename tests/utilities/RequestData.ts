import {FavoriteMovieRequest} from '../../src/domain/request/FavoriteMovieRequest'
import {WatchListRequest} from "../../src/domain/request/WatchListRequest";

export function generateAddFavoriteMovie(): FavoriteMovieRequest {
    return {
        media_type: "movie",
        media_id: 576,
        favorite: true
    }
}

export function errorInServiceAddFavoriteMovie(): FavoriteMovieRequest {
    return {
        media_type: "movies",
        media_id: 576,
        favorite: true
    }
}

export function deleteMovieFromFavoritesMovies(): FavoriteMovieRequest {
    return {
        media_type: "movie",
        media_id: 576,
        favorite: false
    }
}

export function addAMovieToWatchList(): WatchListRequest {
    return {
        media_type: "movie",
        media_id: 100,
        watchlist: true
    }
}

export function removeMovieFromWatchlist(): WatchListRequest {
    return {
        media_type: "movie",
        media_id: 100,
        watchlist: false
    }
}

export function errorInServiceAddWatchlist(): WatchListRequest {
    return {
        media_type: "movies",
        media_id: 576,
        watchlist: true
    }
}
