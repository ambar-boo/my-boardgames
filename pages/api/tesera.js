export default {
    async searchByText(query) {
        return fetch(`https://api.tesera.ru/search?query=${query}`).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
            .then((responseJson) => {
                console.log(responseJson)
                return responseJson;
            })
            .catch((error) => {
                console.log(error)
            });
    },
}