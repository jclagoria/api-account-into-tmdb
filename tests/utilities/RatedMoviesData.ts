import {RatedMovie} from "../../src/domain/models/RatedMovie";

export function responseRatedMovies(): RatedMovie {
    return {
        page: 1,
        results: [
            {
                adult: false,
                backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
                genre_ids: [
                    16,
                    10749,
                    18
                ],
                id: 372058,
                original_language: "ja",
                original_title: "君の名は。",
                overview: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
                popularity: 121.659,
                poster_path: "/q719jXXEzOoYaps6babgKnONONX.jpg",
                release_date: "2016-08-26",
                title: "Your Name.",
                video: false,
                vote_average: 8.497,
                vote_count: 10890,
                rating: 8.0
            },
            {
                adult: false,
                backdrop_path: "/k3wfgR5dRYBtfwisuISJ3H4lgQ0.jpg",
                genre_ids: [
                    16,
                    12,
                    28,
                    14,
                    10402
                ],
                id: 900667,
                original_language: "ja",
                original_title: "ONE PIECE FILM RED",
                overview: "Uta — the most beloved singer in the world. Her voice, which she sings with while concealing her true identity, has been described as “otherworldly.” She will appear in public for the first time at a live concert. As the venue fills with all kinds of Uta fans — excited pirates, the Navy watching closely, and the Straw Hats led by Luffy who simply came to enjoy her sonorous performance — the voice that the whole world has been waiting for is about to resound.",
                popularity: 75.43,
                poster_path: "/ogDXuVkO92GcETZfSofXXemw7gb.jpg",
                release_date: "2022-08-06",
                title: "One Piece Film Red",
                video: false,
                vote_average: 7.293,
                vote_count: 880,
                rating: 8.0
            }
        ],
        total_pages: 1,
        total_results: 2
    }
}
