import {GameInfo, teseraGamesCard} from '@/types/gamesType'
export default {
    async searchByText(query: string) {
        try {
            const response = await fetch(`https://api.tesera.ru/search?query=${query}`);
            if (response.ok) {
                return await response.json() as GameInfo[];
            }
        } catch (error) {
            console.log('Tesera error (searchByText):', error);
            return null;
        }
    },

    async getGameByAlias(alias: string) {
        try {
            const response = await fetch(`https://api.tesera.ru/games/${alias}`);
            if (response.ok) {
                return await response.json() as teseraGamesCard;
            }
        } catch (error) {
            console.log('Tesera error (getGameByAlias):', error);
            return null;
        }
    },
}