const initialState = {
    data: null
};

export default function trendingReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TOP_MOVIES":
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
