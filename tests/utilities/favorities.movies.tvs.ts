import {FavoriteMedia} from "../../src/domain/models/FavoriteMedia";
import {FavoriteTv} from "../../src/domain/models/FavoriteTv";
import {ListTMDB} from "../../src/domain/models/ListTMDB";

export function responseOfListOfMedias():FavoriteMedia {
    return {
        page: 1,
        results: [
            {
                adult: false,
                backdrop_path: "/hjypZf7Juayon8emI6HNSyjbqWF.jpg",
                genre_ids: [
                    28,
                    12,
                    14
                ],
                id: 791373,
                original_language: "en",
                original_title: "Zack Snyder's Justice League",
                overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
                popularity: 86.73,
                poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
                release_date: "2021-03-18",
                title: "Zack Snyder's Justice League",
                video: false,
                vote_average: 8.2,
                vote_count: 9633
            },
            {
                adult: false,
                backdrop_path: "/ovgd6CZxQbRtTGwxk6oYbr7haDA.jpg",
                genre_ids: [
                    27
                ],
                id: 737519,
                original_language: "zh",
                original_title: "粽邪2：馗降",
                overview: "Jia-min, who was born sensitive to the paranormal, tries to summon \"Yi-A-Gu\" with two streamers. Huo-ge helps Jia-min subdue the spirit when the situation goes out of hand. Huo-ge possesses supernatural powers but lost his will to exorcise demons during a battle with the Thai Demon five years ago. As the wave of suicides continues, the village is thrown into chaos. Another battle is about to begin.",
                popularity: 7.934,
                poster_path: "/p1ms0vDzh2XPdGVCKrCQ6sHnubR.jpg",
                release_date: "2020-09-02",
                title: "The Rope Curse 2",
                video: false,
                vote_average: 5.8,
                vote_count: 20
            },
            {
                adult: false,
                backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
                genre_ids: [
                    18
                ],
                id: 550,
                original_language: "en",
                original_title: "Fight Club",
                overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
                popularity: 92.063,
                poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
                release_date: "1999-10-15",
                title: "Fight Club",
                video: false,
                vote_average: 8.441,
                vote_count: 28324
            },
            {
                adult: false,
                backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
                genre_ids: [
                    12,
                    18,
                    53
                ],
                id: 551,
                original_language: "en",
                original_title: "The Poseidon Adventure",
                overview: "When their ocean liner capsizes, a group of passengers struggle to survive and escape.",
                popularity: 25.846,
                poster_path: "/lIGloOrUtGDx6E4vUTGae9C1phJ.jpg",
                release_date: "1972-12-13",
                title: "The Poseidon Adventure",
                video: false,
                vote_average: 7.1,
                vote_count: 830
            },
            {
                adult: false,
                backdrop_path: "/lSTcgiTU5JqKApf87QiI6ZGeAso.jpg",
                genre_ids: [
                    53,
                    9648
                ],
                id: 574,
                original_language: "en",
                original_title: "The Man Who Knew Too Much",
                overview: "A couple vacationing in Morocco with their young son accidentally stumble upon an assassination plot. When the child is kidnapped to ensure their silence, they have to take matters into their own hands to save him.",
                popularity: 16.643,
                poster_path: "/gy8YBRjCQRIT9x9G9F5fpnFD4xw.jpg",
                release_date: "1956-05-16",
                title: "The Man Who Knew Too Much",
                video: false,
                vote_average: 7.5,
                vote_count: 1314
            }
        ],
        total_pages: 1,
        total_results: 5
    }
}

export function responseOfEmptyListOfMovies(): FavoriteTv {
    return {
        page: 17,
        results: [],
        total_pages: 1,
        total_results: 5
    }
}

export function responseOfListOfTv(): FavoriteTv {
    return {
        page: 1,
        results: [
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
                popularity: 535.176,
                poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
                first_air_date: "2008-01-20",
                name: "Breaking Bad",
                vote_average: 8.908,
                vote_count: 13365
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
                popularity: 2911.736,
                poster_path: "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
                first_air_date: "2005-09-13",
                name: "Supernatural",
                vote_average: 8.3,
                vote_count: 7200
            },
            {
                adult: false,
                backdrop_path: "/se2jymoLDghIrLewQismwfmWG.jpg",
                genre_ids: [],
                id: 11,
                origin_country: [
                    "US"
                ],
                original_language: "en",
                original_name: "Strictly Sex with Dr. Drew",
                overview: "Strictly Sex with Dr. Drew is a television show hosted by Loveline host Dr. Drew Pinsky. It ran for 10 episodes in all, and is still featured on the Discovery Health channel.",
                popularity: 4.059,
                poster_path: "/3hFpUg6Ty25Vs5XgbnNz1Xcirb5.jpg",
                first_air_date: "2005-06-08",
                name: "Strictly Sex with Dr. Drew",
                vote_average: 0.0,
                vote_count: 0
            },
            {
                adult: false,
                backdrop_path: "/hib8MpBPU7GdluS38htXCF4uw0c.jpg",
                genre_ids: [
                    80,
                    18,
                    9648
                ],
                id: 2734,
                origin_country: [
                    "US"
                ],
                original_language: "en",
                original_name: "Law & Order: Special Victims Unit",
                overview: "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
                popularity: 4694.069,
                poster_path: "/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
                first_air_date: "1999-09-20",
                name: "Law & Order: Special Victims Unit",
                vote_average: 7.963,
                vote_count: 3593
            }
        ],
        total_pages: 1,
        total_results: 4
    }
}

export function responseOfEmptyListOfTvs() : FavoriteTv {
    return {
        page: 10,
        results: [],
        total_pages: 1,
        total_results: 4
    }
}

export function responseOfListsTMBD(): ListTMDB {
    return {
        page: 1,
        results: [
            {
                description: "Movies with sharcks and derivates",
                favorite_count: 0,
                id: 8271148,
                item_count: 3,
                iso_639_1: "en",
                list_type: "movie",
                name: "SharkList",
                poster_path: null
            },
            {
                description: "List of the best of the series",
                favorite_count: 0,
                id: 8271151,
                item_count: 4,
                iso_639_1: "en",
                list_type: "movie",
                name: "BestSeriesOldTime",
                poster_path: null
            },
            {
                description: "KList of series or movies",
                favorite_count: 0,
                id: 8271150,
                item_count: 2,
                iso_639_1: "en",
                list_type: "movie",
                name: "Anime",
                poster_path: null
            },
            {
                description: "The best horror muvies from Asia.",
                favorite_count: 0,
                id: 8271149,
                item_count: 1,
                iso_639_1: "en",
                list_type: "movie",
                name: "HorrorMoviesFromAsia",
                poster_path: null
            }
        ],
        total_pages: 1,
        total_results: 4
    }
}
