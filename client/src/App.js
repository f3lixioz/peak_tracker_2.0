import './App.css';
import React, { Fragment } from 'react'; //https://reactjs.org/docs/fragments.html

//components
import NewPeak from "./components/NewPeak"
import ListPeak from "./components/ListPeak"
// import EditElv from "./components/EditElv"

function App() {
  // return <Fragment>
  return(
    <div className= "container">
      <NewPeak />
      <ListPeak />
    </div>
  );
  // </Fragment>;
}

export default App;
