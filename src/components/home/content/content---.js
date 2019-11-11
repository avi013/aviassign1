import React,{Component} from 'react';
import Top from './top';
//import Left from './left';
//import Right from './right';
import './content.css';
class Content extends Component{
    constructor(props) {
        super(props);
    }
    
   addRemoveGrocery=function(e) {
        alert(e.target.getAttribute("key"));
    }
    groceryList=['Strawberry','Blueberry','Orange','Banana','Apple','Carrot','Celery','Butter','Chicken','Pork','Fish','Rice','Pasta','Bread','Beef'];
    basketList=['Strawberry','Blueberry','Cheese','Butter','Chicken','Rice','Pasta','Bread','Beef'];
    render(){
        return(
            <React.Fragment>
            <Top/>
                <main>
                    <div>
                        <header>
                        <h3><i class="fa fa-leaf" aria-hidden="true"></i> Groceries</h3>
                    </header>
                    <ul class="Groceries">
                        {
                            this.groceryList.map((numList,i)=>
                            (<li style={{textDecoration: 'none'}} key={i} onClick="{this.addRemoveGrocery}">{numList}</li>))
                        }
                        
                    </ul>
                    </div>
                    <div>
                        <header>
                        <h3><i className="fa fa-shopping-basket" aria-hidden="true" /> Basket</h3>
                        <h3 className="clearBasket"><i className="fa fa-trash" aria-hidden="true" /> </h3>
                        </header>
                        <ul className="Basket">
                            {
                                this.basketList.map((numList,i)=>
                                (<li style={{textDecoration: 'none'}} key={i}> {numList}</li>))
                            }
                        </ul>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
export default Content;