export type GameInfo = {
    title: string;
    alias: string;
    photoUrl?: string;
    description?: string | TrustedHTML | undefined;
    statistics: GalleryStatistics[],
}

export type GameProps = {
    game: GameInfo,
}

export type GalleryItem = {
    photoUrl: string,
    title?: string
}

export type GalleryStatistics = {
    play_game_date: Date | null,
    play_game_count: number
}

export type gamesCard = {
    game: GameInfo,
    gallery?: GalleryItem[]
}