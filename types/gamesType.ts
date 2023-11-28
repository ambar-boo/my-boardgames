export class GameInfo {
    title: string = '';
    alias: string = '';
    photoUrl?: string = '';
    description?: string | TrustedHTML | undefined = '';
    statistics: GalleryStatistics[] = [];

    constructor(title: string, alias: string, photoUrl?: string, description?: string | TrustedHTML | undefined, statistics?: GalleryStatistics[]) {
        this.title = title;
        this.alias = alias;
        this.photoUrl = photoUrl;
        this.description = description;
        this.statistics = statistics || [];
    }

    setGame() {
        return {
            title: this.title,
            alias: this.alias,
            photoUrl: this.photoUrl,
            description: this.description,
            statistics: this.statistics
        }
    }
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

export type gamesCard = {
    game: GameInfo,
    gallery?: GalleryItem[]
}