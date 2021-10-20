import { FavoriteState, FavoriteAction, ACTION_TYPES } from '@/interfaces/IFavorite';

export const favoritesInitialState: FavoriteState = {
    products: []
};

export const favoritesReducer = (state: FavoriteState, action: FavoriteAction) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, { ...action.payload}],
            };

        case ACTION_TYPES.REMOVE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter(product => product._id !== action.payload)],
            };

        default:
            return state;
    }
};