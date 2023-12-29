import {fullGamesCard, GalleryItem, GameInfo, teseraGamesCard} from "@/types/gamesType";
export default class GameInfoFromTeseraDTO {
    info: fullGamesCard = {
        description: '',
        teseraUrl: '',
        photoUrl: '',
        gallery: [],
    };
    data: teseraGamesCard = {
        game: new GameInfo,
        photos: [],
        gallery: [],
    };
    constructor(data: teseraGamesCard) {
        this.data = data;
    }

    setDate() {
        const gallery = [];
        if(this.data.game.photoUrl) {
            gallery.push({ photoUrl: this.data.game.photoUrl});
        }
        if(this.data.photos && this.data.photos.length > 0) {
            this.data.photos.forEach((photo: {
                photoUrl: string,
                title?: string
            }) => {
                gallery.push({
                     photoUrl: photo.photoUrl,
                     title: photo.title
                });
            })
        }
        this.info.gallery = gallery;
        if(this.data.game.description) {
            this.info.description = this.data.game.description;
        }
        if(this.data.game.teseraUrl) {
            this.info.teseraUrl = this.data.game.teseraUrl;
        }

        return this.info;
    }
}