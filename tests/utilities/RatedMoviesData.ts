import {RatedMovie} from "../../src/domain/models/RatedMovie";
import {RatedTvList} from "../../src/domain/models/RatedTvList";
import {RatedTvEpisodes} from "../../src/domain/models/RatedTvEpisodes";

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

export function responseRatedTvEpisodes(): RatedTvEpisodes {
    return {
        page: 1,
        results: [
            {
                air_date: "2018-10-11",
                episode_number: 1,
                episode_type: "standard",
                id: 1515918,
                name: "Stranger in a Strange Land",
                overview: "Sam enlists everyone’s help in trying to track down Dean, who can literally be anywhere. Meanwhile, Castiel may be in over his head after meeting up with an unreliable source. After being drained of his grace, Jack is adjusting to life as a human, learning new skills and figuring out how he fits in to this world of hunters.",
                production_code: "T13.21151",
                runtime: 42,
                season_number: 14,
                show_id: 1622,
                still_path: "/yvaNg9xftwoSeIbYgLCHpS5zMkO.jpg",
                vote_average: 7.0,
                vote_count: 15,
                rating: 8.0
            },
            {
                air_date: "2015-10-07",
                episode_number: 1,
                episode_type: "standard",
                id: 1103318,
                name: "Out of the Darkness, Into the Fire",
                overview: "Picking up where the finale left off, Sam and Dean must deal with the Darkness that has been unleashed.  Castiel deals with the effects of Rowena’s spell and recalls his brutal battle with Crowley.",
                production_code: "4X6252/T13.19252",
                runtime: 42,
                season_number: 11,
                show_id: 1622,
                still_path: "/et4wg0U4ZcXdCTVTJH1KLinjOzN.jpg",
                vote_average: 7.6,
                vote_count: 20,
                rating: 7.0
            },
            {
                air_date: "2016-02-17",
                episode_number: 14,
                episode_type: "standard",
                id: 1161830,
                name: "The Vessel",
                overview: "Hoping to find a weapon powerful enough to defeat Amara, Dean convinces “Castiel,” who is still Lucifer, to send him back in time to 1944 to the fated submarine mission that sunk the Hand of God. Meanwhile, continuing his charade with Sam while they wait for Dean’s return, Lucifer plans his next move.",
                production_code: "4X6264/T13.19264",
                runtime: 42,
                season_number: 11,
                show_id: 1622,
                still_path: "/h2W5doNhVev2bsioRR63YegGpc3.jpg",
                vote_average: 7.1,
                vote_count: 17,
                rating: 7.0
            },
            {
                air_date: "2004-09-28",
                episode_number: 1,
                episode_type: "standard",
                id: 334496,
                name: "See No Evil",
                overview: "A wife and a 9-year-old blind daughter of a Navy captain are kidnapped and the captain is a hostage in his own office, communicating with kidnappers, who watch his every step via computer camera.  NCIS team investigates the scheme where large amount of money is involved.",
                production_code: "201",
                runtime: 44,
                season_number: 2,
                show_id: 4614,
                still_path: "/gjTeJvwTMswAVVl4U5TFA98gP3B.jpg",
                vote_average: 8.0,
                vote_count: 10,
                rating: 9.0
            },
            {
                air_date: "2005-09-20",
                episode_number: 1,
                episode_type: "standard",
                id: 334541,
                name: "Kill Ari (1)",
                overview: "After the terrorist's attack, the NCIS team is shocked and is trying to cope with Kate's sudden death, each in their own way. Now, their mission is to collect all the possible info on Ari and find a way to stop him before he does any more damage. Meanwhile, while feeling guilty over Kate's death, Gibbs is informed that the NCIS director is leaving, and the replacement is Jenny Shepard, a woman Gibbs worked with in the past and had a romantic history with.",
                production_code: "302",
                runtime: 44,
                season_number: 3,
                show_id: 4614,
                still_path: "/qxQUJtawHa8WJxX7IWGaDtfULh.jpg",
                vote_average: 7.9,
                vote_count: 8,
                rating: 9.0
            }
        ],
        total_pages: 1,
        total_results: 5
    }
}
