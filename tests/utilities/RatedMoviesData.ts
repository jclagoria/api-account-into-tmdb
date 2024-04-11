import {RatedMovie} from "../../src/domain/models/RatedMovie";
import {RatedTvList} from "../../src/domain/models/RatedTvList";

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

export function responseRatedTv(): RatedTvList {
    return {
        page: 1,
        results: [
            {
                adult: false,
                backdrop_path: "/mlAzs3tyl5253roHi6eIRbeuONN.jpg",
                genre_ids: [
                    35
                ],
                id: 1400,
                origin_country: [
                    "US"
                ],
                original_language: "en",
                original_name: "Seinfeld",
                overview: "A stand-up comedian and his three offbeat friends weather the pitfalls and payoffs of life in New York City in the '90s. It's a show about nothing.",
                popularity: 924.625,
                poster_path: "/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
                first_air_date: "1989-07-05",
                name: "Seinfeld",
                vote_average: 8.3,
                vote_count: 1820,
                rating: 8.0
            },
            {
                adult: false,
                backdrop_path: "/nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg",
                genre_ids: [
                    18,
                    9648,
                    10765
                ],
                id: 1622,
                origin_country: [
                    "US"
                ],
                original_language: "en",
                original_name: "Supernatural",
                overview: "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
                popularity: 3205.751,
                poster_path: "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
                first_air_date: "2005-09-13",
                name: "Supernatural",
                vote_average: 8.3,
                vote_count: 7206,
                rating: 7.0
            },
            {
                adult: false,
                backdrop_path: "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
                genre_ids: [
                    18,
                    80
                ],
                id: 1396,
                origin_country: [
                    "US"
                ],
                original_language: "en",
                original_name: "Breaking Bad",
                overview: "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
                popularity: 583.311,
                poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
                first_air_date: "2008-01-20",
                name: "Breaking Bad",
                vote_average: 8.908,
                vote_count: 13377,
                rating: 9.0
            }
        ],
        total_pages: 1,
        total_results: 3
    }
}
