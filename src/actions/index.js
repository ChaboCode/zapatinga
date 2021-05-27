const Actions = {
    SEARCH_ONCHANGE: 'SEARCH_ONCHANGE',
    SEARCH_ONFOCUS: 'SEARCH_ONFOCUS',
    SEARCH_ONBLUR: 'SEARCH_ONBLUR',
    CART_ONADD: 'CART_ONADD',
    CART_ONDELETE: 'CART_ONDELETE',
    CART_ONUPDATE: 'CART_ONUPDATE',
    CART_OPERATION: 'CART_OPERATION',
};

export default Actions;

export const searchOnChange = (payload) => {
    return {
        type: Actions.SEARCH_ONCHANGE,
        payload,
    };
};

export const searchOnFocus = (payload) => {
    return {
        type: Actions.SEARCH_ONFOCUS,
        payload,
    };
};

export const searchOnBlur = (payload) => {
    return {
        type: Actions.SEARCH_ONBLUR,
        payload,
    };
};

export const cartOnAdd = (payload) => {
    return {
        type: Actions.CART_ONADD,
        payload,
    };
};

export const cartOnDelete= (payload) => {
    return {
        type: Actions.CART_ONDELETE,
        payload,
    };
};

export const cartOnUpdate = (payload) => {
    return {
        type: Actions.CARD_ONUPDATE,
        payload,
    };
};

export const cartIncrease = (payload) => {
    return {
        type: Actions.CART_OPERATION,
        action: (cart) => {
            for (let cartItem of cart) {
                if (cartItem.entry_id === payload.entry_id) {
                    cartItem.count++;
                }
            }
        }
    }
}

export const cartSubstract = (payload) => {
    return {
        type: Actions.CART_OPERATION,
        action: (cart) => {
            for (let cartItem of cart) {
                if (cartItem.entry_id === payload.entry_id) {
                    cartItem.count--;
                }
            }
        }
    }
}

