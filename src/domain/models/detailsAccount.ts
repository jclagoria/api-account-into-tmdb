interface GravatarModel {
    hash: string;
}

interface TmdbModel {
    avatar_path: string | null;
}

interface AvatarModel {
    gravatar: GravatarModel;
    tmdb: TmdbModel;
}

export interface DetailsAccount{
    avatar: AvatarModel;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
}
