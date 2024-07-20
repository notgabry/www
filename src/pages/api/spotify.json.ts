export const prerender = false
import LastfmAPI from '@modules/Lastfm'
import type { RecentSong, Lastfm } from '@modules/Spotify'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
    const a = await LastfmAPI<Lastfm>({ user: 'notgabry', method: 'user.getrecenttracks', isOverall: true, limit: 1 })

    const last: RecentSong = {
        image: a.recenttracks?.track[0].image[3]['#text'],
        name: a.recenttracks?.track[0].name,
        url: a.recenttracks?.track[0].url,
        artist: a.recenttracks?.track[0].artist['#text']
    }
    return new Response(JSON.stringify(last))
}
