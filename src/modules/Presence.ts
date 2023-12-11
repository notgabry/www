export interface Lastfm {
    recenttracks: {
        track: {
            artist: {
                '#text': string
            }
            image: {
                size: 'extralarge' | 'large' | 'medium' | 'small'
                '#text': string
            }[]
            name: string
            url: string
        }[]
    }
}

export interface RecentSong {
    image: string
    name: string
    url: string
    artist: string
}
