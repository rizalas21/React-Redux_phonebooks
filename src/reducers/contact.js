const initialState = {
    phonebooks: [],
    page: 1,
    pages: 1,
    limit: 30,
    total: 31
}

const contact = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PHONEBOOKS_SUCCESS':
            return { ...state, ...action.data, }

        case 'LOAD_PAGE_SUCCESS':
            console.log('ini adalah acrtion', action)
            return { ...state, ...action.data }

        case 'ADD_TODO':
            return state

        case 'LOAD_PHONEBOOKS_FAILED':
        default:
            return state
    }
}

export default contact