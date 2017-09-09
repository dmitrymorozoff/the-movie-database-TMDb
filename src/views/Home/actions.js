export const HOME_MOVIES = {
    HOME_MOVIES_FETCH_REQUEST: "HOME_MOVIES_FETCH_REQUEST",
    ALL_GENRES_FETCH_REQUEST: "ALL_GENRES_FETCH_REQUEST",
    ALL_GENRES_FETCH_SUCCEEDED: "ALL_GENRES_FETCH_SUCCEEDED",
    ALL_GENRES_FETCH_FAILED: "ALL_GENRES_FETCH_FAILED",
    HOME_MOVIES_FETCH_SUCCEEDED: "HOME_MOVIES_FETCH_SUCCEEDED",
    HOME_MOVIES_FETCH_FAILED: "HOME_MOVIES_FETCH_FAILED"
};

export const fetchHomeMovies = () => ({
    type: HOME_MOVIES.HOME_MOVIES_FETCH_REQUEST
});

export const fetchAllGenres = () => ({
    type: HOME_MOVIES.ALL_GENRES_FETCH_REQUEST
});
