import {DetailsAccount} from "../../src/domain/models/detailsAccount";
import {AccountSuccess} from "../../src/domain/models/AccountSuccess";
import {ApiError} from "../../src/domain/models/ApiError";

export function generateFakeDetailsAccount(): DetailsAccount {
    return {
        avatar: {
            gravatar: {
                hash: "3ea6bcf207583e1ba8708c87ee11aa0a"
            },
            tmdb: {
                avatar_path: null
            }
        },
        id: 10332765,
        iso_639_1: "en",
        iso_3166_1: "AR",
        name: "",
        include_adult: true,
        username: "juan-ka-arg"
    }
}

export function generateMovieInfoToAdd(): AccountSuccess {
    return {
        success: true,
        status_code: 1,
        status_message: "Success."
    }
}

export function generateMovieInfoToAddUpdate(): AccountSuccess {
    return {
        success: true,
        status_code: 12,
        status_message: "The item/record was updated successfully."
    }
}

export function generateExceptionWhenAddFavoriteMovie(): ApiError {
    return {
        api_status_code: 404,
        api_status_text: "Not Found",
        success: false,
        status_code: 34,
        status_message: "The resource you requested could not be found."
    }
}

export function generateResponseRemoveFromFavorites(): AccountSuccess {
    return {
        "success": true,
        "status_code": 13,
        "status_message": "The item/record was deleted successfully."
    }
}

export function generatedResponseAddMovieToWatchList(): AccountSuccess {
    return {
        "success": true,
        "status_code": 1,
        "status_message": "Success."
    }
}

export function generateResponseRemoveFromWatchlist(): AccountSuccess {
    return {
        success: true,
        status_code: 13,
        status_message: "The item/record was deleted successfully."
    }
}

export function generateExceptionWhenAddWatchList(): ApiError {
    return {
        api_status_code: 404,
        api_status_text: "Not Found",
        success: false,
        status_code: 34,
        status_message: "The resource you requested could not be found."
    }
}
