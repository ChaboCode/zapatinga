import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_PATH, GET_ZAPATOS_BY_MODEL } from '../constants';

import CardsContainer from './CardsContainer';

function SearchDisplay(props) {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        props.search && axios({
            method: 'get',
            url: API_PATH + GET_ZAPATOS_BY_MODEL,

            headers: {
                'Content-Type': 'application/json',
            },

            params: {
                search: props.search,
            },
        }).then((result) => {
            console.log(result.data)
            setSearchResult(result.data);
        });
    }, [props.search]);

    const searchCards = (
        <CardsContainer data={searchResult} />
    )

    return (
        <div id="search-display">
            {searchCards || (
                <span class="search-message">No hay resultados, prueba algo diferente</span>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
    };
};

export default connect(mapStateToProps, null)(SearchDisplay);
