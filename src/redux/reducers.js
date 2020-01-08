import {
    LOAD_POPULAR_GAMES,
    LOAD_GAME_PROFILE,
    LOAD_NEW_RELEASES,
    LOAD_COMING_SOONS,
    LOAD_GAME_SEARCH_RESULTS,
    LOAD_HIGH_RATINGS,
    LOAD_MOST_ANTICIPATED
} from './actions';

const initialState = {
    // popularGames: [],
    // gameProfile: [],
    // newReleases: [],
    // comingSoons: [],
    // gameSearchResults: []
}

export const reducers = (state = initialState, action) => {
	if (action.type === LOAD_POPULAR_GAMES) {
		return Object.assign({}, state, {
			popularGames: action.popularGames
        });
    }
    if (action.type === LOAD_GAME_PROFILE) {
        return Object.assign({}, state, {
            gameProfile: action.gameProfile
        });
    }
    if (action.type === LOAD_NEW_RELEASES) {
        return Object.assign({}, state, {
            newReleases: action.newReleases
        });
	}
    if (action.type === LOAD_COMING_SOONS) {
        return Object.assign({}, state, {
            comingSoons: action.comingSoons
        });
    }
    if (action.type === LOAD_HIGH_RATINGS) {
        return Object.assign({}, state, {
            highRatings: action.highRatings
        });
    }
    if (action.type === LOAD_MOST_ANTICIPATED) {
        return Object.assign({}, state, {
            mostAnticipated: action.mostAnticipated
        });
    }
    if (action.type === LOAD_GAME_SEARCH_RESULTS) {
        return Object.assign({}, state, {
            gameSearchResults: action.gameSearchResults
        });
    }

	return state;
};