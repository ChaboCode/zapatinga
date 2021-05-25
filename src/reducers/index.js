import Actions from '../actions';

const reducer = (state, action) => {
    switch (action.type) {

        case Actions.SEARCH_ONCHANGE:
            return {
                ...state,
                search: action.payload.search,
            };

        case Actions.SEARCH_ONFOCUS:
            return {
                ...state,
                searchFocus: true,
            };
        
        case Actions.SEARCH_ONBLUR:
            return {
                ...state,
                searchFocus: false,
            }

        default:
            return state;
    }
};

export default reducer;
