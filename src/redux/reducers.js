import {
    LOAD_POPULAR_GAMES,
    LOAD_GAME_PROFILE,
    LOAD_NEW_RELEASES
} from './actions';

const initialState = {}

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

	return state;
};