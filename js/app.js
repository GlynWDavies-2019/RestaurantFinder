class Zomato {
    constructor() {
        this.api = "ca1e6c50b89abf0ea10bfc459a503203";
        this.header = {
            method: 'GET',
            headers: {
                'user-key': this.api,
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        };
    }
    async searchAPI() {
        const categoryURL = `https://developers.zomato.com/api/v2.1/categories`;
        const categoryInfo = await fetch(categoryURL, this.header);
        const categoryJSON = await categoryInfo.json();
        const categories = await categoryJSON.categories;
        return {
            categories:categories
        }
    }
}

class UI {
    constructor() {
        this.loader = document.querySelector('.loader');
        this.restaurantList = document.getElementById('restaurant-list');
    }
    addSelectOptions(categories) {
        
    }
}

(function(){
    const searchForm = document.getElementById('search-form');
    const searchCity = document.getElementById('search-city');
    const searchCategory = document.getElementById('search-category');
    const zomato = new Zomato();
    const ui = new UI();
    document.addEventListener('DOMContentLoaded',() => {
        zomato.searchAPI().then(data => console.log(data))
    });
})();