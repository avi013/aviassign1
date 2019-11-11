import React from 'react';
import './left.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../redux/action/actionType';

class Left extends React.Component{
    groceryList= this.props.groceries;
      render(){
        return(<div>
            <header>
            <h3><i className="fa fa-leaf" aria-hidden="true"></i> Groceries</h3>
          </header>
          <ul className="Groceries">
            {
                this.groceryList.map((numList,i)=>
                (<li style={{textDecoration: 'none'}} key={i} onClick={() => this.props.onGroceryAdded(numList)}>{numList}</li>))
            }
            
          </ul>
        </div>)
    }
}

const mapStateToProps = state => {
  return {
    groceries: state.groceries
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGroceryAdded: (groName) => dispatch({type: actionTypes.ADD_GROCERY, groceryName: groName}),
    getAllGroceries: () => dispatch({type: actionTypes.GET_GROCERY_LIST})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Left);