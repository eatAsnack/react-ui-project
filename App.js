import React from 'react';

var perf =require('./App.html');

class App extends React.Component {
   render(){
      return (
        <div>
            <div class="carousel">
                <div class="carousel-item">
                    <img src={require("./1.png")} class="responsive-img"></img>
                </div>
                <div class="carousel-item">
                    <img src={require("./2.png")} class="responsive-img"></img>
                </div>
                <div class="carousel-item">
                    <img src={require("./3.png")} class="responsive-img"></img>
                </div>  
             </div>
        </div>      
      );
      }
      }
    export default App;
