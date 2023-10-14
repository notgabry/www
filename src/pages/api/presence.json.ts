export const prerender = false
import type { Presence } from '@modules/Presence'
import type { APIRoute } from 'astro'
import Image from '@modules/Presence'

export const GET: APIRoute = async () => {
    const a = await fetch('https://api.lanyard.rest/v1/users/683423964227436576') // TODO: no dependencies from lanyard
    const b: Presence = await a.json()

    const data = {
        activity: {
            application_id: b.data.activities[0]?.application_id || '0',
            name: b.data.activities[0]?.name,
            state: b.data.activities[0]?.state || null,
            details: b.data.activities[0]?.details || null,
            assets: {
                large_image: b.data.spotify?.album_art_url ?? Image(b)
            }
        },
        username: b.data.discord_user.username
    }
    return new Response(JSON.stringify(data))
}
