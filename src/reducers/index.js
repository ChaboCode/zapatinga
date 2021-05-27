import Actions from '../actions';

const cartOnAdd = (state, action) => {
    for (let cart_item of state.cart) {
        console.log(`Checking ${cart_item.zapato_id} and ${action.payload.new_item.zapato_id}`);
        if (cart_item.zapato_id === action.payload.new_item.zapato_id) {
            return state;
        }
    }

    return {
        ...state,
        cart: [...state.cart, action.payload.new_item],
    };
};

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
            };

        case Actions.CART_ONADD:
            return cartOnAdd(state, action);

        case Actions.CART_ONDELETE:
            console.log('xd');
            return {
                ...state,
                cart: state.cart.filter((item) => item.entry_id != action.payload.entry_id),
            };

        case Actions.CART_OPERATION:
            action.action(state.cart);
            return state;
        default:
            return state;
    }
};

export default reducer;
