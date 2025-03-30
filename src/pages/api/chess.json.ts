export const prerender = false
import type { Chesscom } from '../../types.ts'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
    const a: Chesscom = await fetch('https://api.chess.com/pub/player/missing-her-eyes/stats')
        .then((a) => a.json())
        .catch(() => {})

    return new Response(JSON.stringify(a))
}
