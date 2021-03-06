import { connect } from 'react-redux'
import Product from './product';
import { getData, getPois, getDataTest, getDataHelloKitty } from 'api/app';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.product
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchPois: (params) => {
            dispatch({
                type: 'SEARCH_POIS',
                payload: getPois(params)
            })
        },
        sub: () => {
            dispatch({
                type: 'SEARCH_POIS',
                payload: getDataHelloKitty()
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product)