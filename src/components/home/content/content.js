import React from 'react';
import Top from './top';
import Left from './left';
import Right from './right';
import './content.css';
class Content extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Top/>
                <main>
                <Left/>
                    <Right/>
                </main>
            </React.Fragment>
        );
    }
}
export default Content;