export interface Video {
    id: string
    title: string
    thumbnailUrl: string
    channelName: string
    duration: number // seconds
    publishedAt: Date
}

export interface Theme {
    id: string
    name: string
    keywords: string[]
    userId: string
}