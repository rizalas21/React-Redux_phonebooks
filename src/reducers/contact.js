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
            return { ...state, phonebooks: [...state.phonebooks, ...action.data.phonebooks], page: action.data.page }

        case 'ADD_PHONEBOOKS_SUCCESS':
            return [
                ...state, ...state.phonebooks.filter(data => data.id !== action.data.id),
                {
                    id: action.data.id,
                    name: action.data.name,
                    phone: action.data.phone
                }
            ]

        case 'LOAD_PHONEBOOKS_FAILED':
        default:
            return state
    }
}

export default contact