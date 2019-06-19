import React from 'react';
import './App.css';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Header from './Screens/Header';
import Tag from './Components/Tags';
import Grid  from './Components/Grids';
import Footer from './Screens/Footer'
import Chips from './Components/CountryChips';
import Navigations from "./config/router";

class App extends React.Component {
  constructor() {
    super();
  this.state = {
      showDashBoard: false
    }
    console.log('state===>', this.state)
  }
  render() { 
  return (
    <div className='Header'>
      <Header /> 
      <div className="app_bg" style={{width:"100%", height:"545px" }}>
      <Tag />
      </div> 
      <div className="App" >
        <div className="cards" style={{marginTop:"0.8in"}}>
          <Grid />
        </div>
        <div className="countryChips">
          <Chips />
        </div>
          
          {/* <SignUp />
          <SignIn /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  }
}

export default App;