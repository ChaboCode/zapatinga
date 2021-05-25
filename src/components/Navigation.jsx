import React from 'react';
import { connect } from 'react-redux';

import CardsContainer from './CardsContainer'
import SearchDisplay from './SearchDisplay';

function Navigation(props) {
    const { searchFocus } = props;

    const cards = (
            <section className={searchFocus ? "hidden" : null}>
                <CardsContainer order="recent" />
            </section>
    );

    return (
        <>
            {cards}
            {searchFocus && <SearchDisplay />}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        searchFocus: state.searchFocus,
    }
}

export default connect(mapStateToProps, null)(Navigation);
