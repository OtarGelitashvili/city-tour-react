import React, {Component} from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import TourList from '../src/Components/TourList'
class App extends Component {
render  () {
  return (  
  <React.Fragment>
    <Navbar />
    <TourList/>
  </React.Fragment>
  )
}
}
export default App;
