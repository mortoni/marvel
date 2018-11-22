import {
    SEARCH,
    CLEAN_CHARS,
    UPDATE_CHARS,
    SEARCHING,
} from "../Actions/ActionTypes";

const searchState = {
    query: '',
    chars: [],
    isSearching: false,
}

export function search(state = searchState, action) {
    const { chars, query } = action

    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                query
            };
        case CLEAN_CHARS:
            return {
                ...state,
                chars: []
            };
        case UPDATE_CHARS:
            return {
                ...state,
                isSearching: false,
                chars
            };
        case SEARCHING:
            return {
                ...state,
                isSearching: true,
            };
        default:
            return { ...state };
    }
}
