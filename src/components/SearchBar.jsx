import React from 'react';
import './styles/SearchBar.css';

import { searchOnChange, searchOnBlur, searchOnFocus } from '../actions';
import { connect } from 'react-redux';

function SearchBar(props) {
    const { searchOnChange, searchOnFocus, searchOnBlur, search } = props;

    const handleChange = (event) => {
        event.preventDefault();
        searchOnChange({ search: event.target.value });

        if (search === '') {
            searchOnBlur();
            event.target.blur();
        }
    };

    const handleFocus = (event) => {
        event.preventDefault();
        searchOnFocus();
    };

    return (
        <div className="search-bar__container">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Qu&eacute; est&aacute;s buscando?"
                onChange={handleChange}
                onFocus={handleFocus}
            />
        </div>
    );
}

const mapDispatchToProps = {
    searchOnChange,
    searchOnFocus,
    searchOnBlur,
};

const mapStateToProps = (state) => {
    return { search: state.search };
};

export default connect(null, mapDispatchToProps)(SearchBar);
