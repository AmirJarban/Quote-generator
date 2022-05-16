import React from 'react';
import axios from 'axios';
import './App.css';



class App extends React.Component{
  
  state = { advice : '' }
  
  componentDidMount(){
    this.fetchAdvice()
  }
  
  fetchAdvice = () =>{
    axios.get(`https://api.adviceslip.com/advice`)
    .then(response => {
      console.log(response.data.slip)
      
      const { advice } = response.data.slip;
      
      this.setState({ advice : advice })
    })
    .then(err => console.log(err))
  }

  render(){
    const {advice} = this.state;
    return(
      <div className='App'>
        <div className='card'>
          <h3 className='heading'>{advice}</h3>
          <button onClick={this.fetchAdvice}><span>Change</span></button>
        </div>
      </div>
    )
  }
}

export default App;
