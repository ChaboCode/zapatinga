const Actions = {
    SEARCH_ONCHANGE: 'SEARCH_ONCHANGE',
    SEARCH_ONFOCUS: 'SEARCH_ONFOCUS',
    SEARCH_ONBLUR: 'SEARCH_ONBLUR',
};

export default Actions;

export const searchOnChange = (payload) => {
    return {
        type: Actions.SEARCH_ONCHANGE,
        payload,
    };
};

export const searchOnFocus= (payload) => {
    return {
        type: Actions.SEARCH_ONFOCUS,
        payload,
    };
};

export const searchOnBlur= (payload) => {
    return {
        type: Actions.SEARCH_ONBLUR,
        payload,
    };
};