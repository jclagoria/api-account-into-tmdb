import {FavoriteMovie} from "../../src/domain/models/FavoriteMovie";

export function responseOfListOfMedias():FavoriteMovie {
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

export function responseOfEmptyListOfMedias(): FavoriteMovie {
    return {
        "page": 17,
        "results": [],
        "total_pages": 1,
        "total_results": 5
    }
}
