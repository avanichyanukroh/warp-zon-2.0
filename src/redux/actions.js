import axios from 'axios';

export const LOAD_POPULAR_GAMES = 'LOAD_POPULAR_GAMES';
export const loadPopularGames = (popularGames) => ({
	type: LOAD_POPULAR_GAMES,
	popularGames
});

export const LOAD_GAME_PROFILE = 'LOAD_GAME_PROFILE';
export const loadGameProfile = (gameProfile) => ({
	type: LOAD_GAME_PROFILE,
	gameProfile
});

export const LOAD_NEW_RELEASES = 'LOAD_NEW_RELEASES';
export const loadNewReleases = (newReleases) => ({
	type: LOAD_NEW_RELEASES,
	newReleases
});

export const getPopularGames = () => dispatch => {
    axios({
        url: 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': 'e3a95dd164fdc12b9eb483624161e322'
        },
        data: `
            fields
                name, popularity;
            sort
                popularity desc;`
    })
    .then(res => {
        dispatch(loadPopularGames(res.data));
    })
    .catch(err => {
        console.error(err);
    });
}

export const getGameProfile = (gameId) => dispatch => {
    axios({
        url: 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': 'e3a95dd164fdc12b9eb483624161e322'
        },
        data: `
            fields
                *;
            where
                id=${gameId};`
    })
    .then(res => {
        dispatch(loadGameProfile(res.data));
    })
    .catch(err => {
        console.error(err);
    });
}

export const getGameProfiles = (gameIds) => dispatch => {
    axios({
        url: 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': 'e3a95dd164fdc12b9eb483624161e322'
        },
        data: `
            fields
                *;
            where
                id=(${gameIds});`
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.error(err);
    });
}

export const getNewReleases = () => dispatch => {
    axios({
        url: 'https://api-v3.igdb.com/release_dates',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': 'e3a95dd164fdc12b9eb483624161e322'
        },
        data: `
            fields
                *;
            where
                date < ${Date.now()};
            sort
                date desc;`
    })
    .then(res => {
        let newReleasesIds = [];

        res.data.forEach(result => {
            newReleasesIds.push(result.id);
        });

        return getGameProfiles(newReleasesIds);
    })
    .then(newReleases => {
        dispatch(loadNewReleases(newReleases));
    })
    .catch(err => {
        console.error(err);
    });
}