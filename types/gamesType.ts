export class GameInfo {
    title: string = '';
    alias: string = '';
    photoUrl?: string = '';
    description?: string | TrustedHTML = '';
    statistics: GalleryStatistics[] = [];
    teseraUrl?: string
}

export type GameProps = {
    game: GameInfo,
}

export type GalleryItem = {
    photoUrl: string,
    title?: string
}

export type GalleryStatistics = {
    play_game_date: Date | undefined,
    play_game_count: number | null,
}

export type teseraGamesCard = {
    game: GameInfo,
    photos?: GalleryItem[],
    gallery?: GalleryItem[],
}

export type fullGamesCard = {
    description: string | TrustedHTML,
    teseraUrl: string,
    photoUrl?: string,
    gallery?: GalleryItem[],
}