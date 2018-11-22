import {
    OPEN_MODAL,
    CLOSE_MODAL,
} from "../Actions/ActionTypes";

const modalState = {
    isOpen: false,
    char: {}
}

export function modal(state = modalState, action) {
    const { char } = action

    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                char
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                char: {}
            };
        default:
            return { ...state };
    }
}
