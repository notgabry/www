import moment from 'moment'

export interface Presence {
    data: {
        activities: [
            {
                application_id: string
                name: string
                state: string
                details: string
                assets: {
                    large_image: string
                }
                timestamps: {
                    start: number
                }
            }
        ]
        discord_user: {
            username: string
        }
        listening_to_spotify: boolean
        spotify: {
            album_art_url: string
        }
    }
}

export interface PresenceAPI {
    activity: {
        application_id: string
        name: string
        state: string
        details: string
        assets: {
            large_image: string
        }
        timestamps: {
            start: number
        }
    }
    username: string
}

const Image = (data: Presence) => {
    const v = data.data.activities[0]
    if (!v || !v.assets) return 'https://cdn.inertiah.uno/eyes.png'
    return `${v.assets.large_image.startsWith('mp:external/') ? `https://media.discordapp.net/external/${v.assets.large_image.replace('mp:external/', '')}` : `https://cdn.discordapp.com/app-assets/${v.application_id}/${v.assets.large_image}.webp`}`
}

export const RelativeTime = (date: Date) => {
    const start = moment(date)
    const currentDate = moment()
    const duration = moment.duration(currentDate.diff(start))

    const days = duration.days().toString().padStart(2, '0')
    const hours = duration.hours().toString().padStart(2, '0')
    const minutes = duration.minutes().toString().padStart(2, '0')
    const seconds = duration.seconds().toString().padStart(2, '0')

    return `${Number(days) ? `${days}:` : ''}${Number(hours) ? `${hours}:` : ''}${minutes}:${seconds}` // 00:01 || 1s
}

export default Image
