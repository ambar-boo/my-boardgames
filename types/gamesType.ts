export type IGames = {
    title: string;
    alias: string;
    photoUrl: string;
}


type GameInfo = {
    title: string;
    description?: string | TrustedHTML | undefined;
    alias: string;
    photoUrl: string;
}

export type gamesCard = {
    game: GameInfo
}