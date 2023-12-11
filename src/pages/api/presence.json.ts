export const prerender = false
import type { RecentSong, Lastfm } from '@modules/Presence'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
    const a: Lastfm = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=notgabry&api_key=${import.meta.env.Lastfm}&format=json&limit=1`)
        .then((a) => a.json())
        .catch(() => {})

    const last: RecentSong = {
        image: a.recenttracks?.track[0].image[3]['#text'],
        name: a.recenttracks?.track[0].name,
        url: a.recenttracks?.track[0].url,
        artist: a.recenttracks?.track[0].artist['#text']
    }
    return new Response(JSON.stringify(last))
}
4
