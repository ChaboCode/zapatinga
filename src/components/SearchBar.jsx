import React from 'react';
import './styles/SearchBar.css';

import { searchOnChange, searchOnBlur, searchOnFocus } from '../actions';
import { connect } from 'react-redux';

function SearchBar(props) {
    const { searchOnChange, searchOnFocus, searchOnBlur } = props;

    const handleChange = (event) => {
        event.preventDefault();
        searchOnChange({search: event.target.value});
    };

    const handleFocus = (event) => {
        event.preventDefault();
        searchOnFocus();
    };

    const handleBlur = (event) => {
        event.preventDefault();
        searchOnBlur();
    };

    return (
        <div className="search-bar__container">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Qu&eacute; est&aacute;s buscando?"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
}

const mapDispatchToProps = {
    searchOnChange,
    searchOnFocus,
    searchOnBlur,
};

export default connect(null, mapDispatchToProps)(SearchBar);
