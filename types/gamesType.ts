export type IGames = {
    title: string;
    alias: string;
    photoUrl?: string;
}


type GameInfo = {
    title: string;
    alias: string;
    photoUrl?: string;
    description?: string | TrustedHTML | undefined;
}

export type gamesCard = {
    game: GameInfo
}