import React from 'react'; 
import BodyOne from "./comp/BodyOne/BodyOne";
import Header from "./comp/Header/Header";
import './App.css'
import Abc from './comp/Nav/Nav';
import BodyTwo from './comp/BodyTwo/BodyTwo';
import BodyThree from './comp/BodyThree/BodyThree';
import BodyFour from './comp/BodyFour/BodyFour';
import BodyFive from './comp/BodyFive/BodyFive';
import Footer from './comp/Footer/Footer';



function App() {
  return (
    <div>
      
      <Abc />
      <Header />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <BodyFour />
      <BodyFive />
      <Footer />
    </div>
  );
}

export default App;
