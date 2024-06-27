const LastfmAPI = async <T>({ user, method, isOverall, limit }: { user: string; method: string; isOverall: boolean; limit: number }) => {
    const a = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${import.meta.env.Lastfm}&format=json&limit=${limit}&period=${
            isOverall ? 'overall' : '7day'
        }`
    )

    const data: T = await a.json()

    return data
}

export default LastfmAPI
