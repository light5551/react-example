export const STUDY = 'study';
export const WORK = 'work';
export const PERSONAL = 'personal';
export const ALL = 'all';
export const ADD = 'add';

export const C = {
    ADD: ADD,
    SHOW_ALL: ALL,
    SHOW_STUDY: STUDY,
    SHOW_WORK: WORK,
    SHOW_PERSONAL: PERSONAL
}

function reducer(state, action) {
    let newState = Object.assign([], state)
    switch (action.type) {
        case C.ADD:
            newState.todos.push({
                body: action.body.body,
                type: action.body.type,
                show: true
            })
            return newState
        case C.SHOW_ALL:
            newState.todos.map(value => value.show=true)
            return newState
        case C.SHOW_PERSONAL:
            newState.todos.map(value => {
                    value.show = value.type === PERSONAL;
            })
            return newState
        case C.SHOW_STUDY:
            newState.todos.map(value => {
                value.show = value.type === STUDY;
            })
            return newState
        case C.SHOW_WORK:
            newState.todos.map(value => {
                value.show = value.type === WORK;
            })
            return newState
        default:
            return state
    }
}

export default reducer