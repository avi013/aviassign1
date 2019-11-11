import React from 'react';
import './top.css';

class Top extends React.Component{
    render(){
        return(<nav className="search-bar">
            <form><input type="text" name="filterIt" defaultValue="filter for e.g. Apple onChange (not implemented)" /></form>
          </nav>);
    }
}

export default Top;