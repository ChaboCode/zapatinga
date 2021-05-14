import React from 'react';
import { connect } from 'react-redux';

import CardsContainer from './CardsContainer'

function Navigation(props) {
    const { searchFocus } = props;

    const cards = (
            <section className="home-section">
                <CardsContainer order="recent" />
            </section>
    );

    return !searchFocus ? cards : null;
}

const mapStateToProps = (state) => {
    return {
        searchFocus: state.searchFocus,
    }
}

export default connect(mapStateToProps, null)(Navigation);
