import { TOGGLE_FAVORITES,ADD_FAVORITE,REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favourites: [],
    displayFavourites: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:{
            let favoriteMovie = {
                id:action.payload.id,
                title:action.payload.title,
            };
            return {...state,favourites: [...state.favourites, favoriteMovie]};
        }

        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavourites: !state.displayFavourites,
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                favourites: state.favourites.filter(
                    (movie) => movie.id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default reducer;