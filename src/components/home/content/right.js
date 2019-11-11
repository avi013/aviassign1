import React from 'react';
import './right.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../redux/action/actionType';

class Right extends React.Component{
    basketList=['Strawberry','Blueberry','Cheese','Butter','Chicken','Rice','Pasta','Bread','Beef'];

    render(){
        return(<div>
            <header>
              <h3><i className="fa fa-shopping-basket" aria-hidden="true" /> Basket</h3>
              <h3 className="clearBasket" onClick={() => this.props.onRemoveAllGrocery()}><i className="fa fa-trash" aria-hidden="true" /> </h3>
            </header>
            <ul className="Basket">
                {
                    this.props.basketCounter > 0 ?
                        Object.keys(this.props.basket).map((numList, i) => (
                            this.props.basket[numList] !== 0 ? 
                            <li style={{color: 'black'}} key={i} onClick={() => this.props.onGroceryRemoved(numList)}>
                            {this.props.basket[numList]+' '+numList}</li> : '' 
                        ))
                    : 
                    <li style={{color: 'black'}}>Your basket is empty!</li> 
                }
            </ul>
          </div>);
    }
}

const mapStateToProps = state => {
    return {
        basket: state.basket.basket,
        basketCounter: state.basket.basketCounter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGroceryAdded: (groName) => dispatch({type: actionTypes.ADD_GROCERY, groceryName: groName}),
        onGroceryRemoved: (groName) => dispatch({type: actionTypes.REMOVE_GROCERY, groceryName: groName}),
        onRemoveAllGrocery: () => dispatch({type: actionTypes.REMOVE_ALL_GROCERY}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Right);