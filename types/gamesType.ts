export type IGames = {
    title: string;
    alias: string;
    photoUrl?: string;
}

export type GameInfo = {
    title: string;
    alias: string;
    photoUrl?: string;
    description?: string | TrustedHTML | undefined;
}

export type GalleryItem = {
    photoUrl: string,
    title?: string
}

export type gamesCard = {
    game: GameInfo,
    gallery?: GalleryItem[]
}