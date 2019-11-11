import React,{Component} from 'react';
// import logo from './logo.svg';
import Header from './components/global/header/header';
import Content from './components/home/content/content';
import Footer from './components/global/footer/footer';
import './App.css';

class App extends Component{
render(){
return(
    <React.Fragment>
    <div className="App">
      <Header/>
      <Content/>
      <Footer />
    </div>
    </React.Fragment>
);

}
}

export default App;
