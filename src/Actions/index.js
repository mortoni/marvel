import * as Api from "../Api";
import * as actionTypes from "./ActionTypes";

/* Categories Action Creators */

export function openModal(char) {
    return dispatch => dispatch({ type: actionTypes.OPEN_MODAL, char })
}

export function closeModal() {
    return dispatch => dispatch({ type: actionTypes.CLOSE_MODAL })
}

export function searchTerm(query) {
    return dispatch => dispatch({ type: actionTypes.UPDATE_QUERY, query })
}

export function cleanChars() {
    return dispatch => dispatch({ type: actionTypes.CLEAN_CHARS })
}

export function updateChars(query) {
    return dispatch => {
        dispatch({ type: actionTypes.SEARCHING });

        Api.getCharacters(query).then(data => {
            const chars = data.results;
            dispatch({ type: actionTypes.UPDATE_CHARS, chars });
        });
    }

}
