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
            '@attr': {
                nowplaying: boolean
            }
        }[]
    }
}

export interface RecentSong {
    image: string
    name: string
    url: string
    artist: string
    nowplaying: boolean
}

export interface Chesscom {
    chess_rapid: {
        last: {
            rating: number
            date: number
        }
    }
    chess_blitz: {
        last: {
            rating: number
            date: number
        }
    }
}
