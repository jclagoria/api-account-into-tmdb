import {FavoriteMovieRequest} from '../../src/domain/request/FavoriteMovieRequest'

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
