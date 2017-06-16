//constants
export const SEARCH_POIS_PENDING = 'SEARCH_POIS_PENDING';
export const SEARCH_POIS_REJECTED = 'SEARCH_POIS_REJECTED';
export const SEARCH_POIS_FULFILLED = 'SEARCH_POIS_FULFILLED';

//actions
export function addOne() {
    return {
        type: SEARCH_POIS_PENDING
    }
}

//reducer
const initialState = {
    fetching: false,
    fetched: false,
    pois: { data: { pois: [] } },
    error: null
}
export default function getPois(state = initialState, action) {
    switch (action.type) {
        case SEARCH_POIS_PENDING:
            return { ...state, fetching: true };
        case SEARCH_POIS_REJECTED:
            return { ...state, fetching: false, error: action.payload };
        case SEARCH_POIS_FULFILLED:
            return { ...state, fetching: false, fetched: true, pois: action.payload };
        default:
            return state;
    }
}