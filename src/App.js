import React from 'react';
import './App.css';
import styles from './App.module.css';
import Head from './components/Head';
import axios from 'axios';
class App extends React.Component {
  keyChange = (event)=>{
    this.setState({
      keyword : event.target.value
    })
  }
  hit_api(props){
    axios.post(`https://itunes.apple.com/search?term=${props.replace(" ", "+")}`).then(res => {
      console.log(res);
    })
  }
  constructor(){
    super()
    this.state = {
      data: [],
      keyword: ''
    }
  }
  render(){
    return (
      <div>
        <Head api={this.hit_api} keyword={this.state.keyword} key_change={this.keyChange}/>
      </div>
    );
  }
}

export default App;
