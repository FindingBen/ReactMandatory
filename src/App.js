import React, { Component } from 'react';
import './App.css';
import MusicList from './components/MusicList';
import axios from 'axios';
import MusicItem from './components/MusicItem'


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      songs:[],
      term:''
    }
  }

  getData = async () => {  
    const response = await axios.get("https://songsrestapi.azurewebsites.net/api/Songs")
    this.setState({ songs: response.data });
    console.log(response)
};


  render() {
    return (
      
      <div className="container-block">
     <table className="titleBar">
       <tbody>
       <tr>
         <td>
           <img src=""></img>
         </td>
        <td>
        </td>
        <td><h1>Music Box</h1></td>
       </tr>
       </tbody>
     </table>
        
        <div className="container">
            <input value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} style={{
              fontSize:20,
              width:'18%',
              marginTop:10,
              marginLeft:'42%',
              paddingBottom:8,
              paddingTop:8
           }}placeholder='Just type..'></input>
        </div>
        <div>
        <button style={
          {marginLeft:'48%',
        marginTop:10,
      marginBottom:10}
        } onClick={this.getData} className="ui blue button">
          Load up 
        </button>
      </div>
     
     
      
      <div className="cards-slider">
        <div className="cards-slider-wrapper">
        <MusicList songs={this.state.songs} searchTerm={this.state.term}></MusicList>
        </div>
      </div>
      
      <button className="ui green button" style={{marginLeft:'46%',
      marginTop:10}}
          // onClick={() => this.nextProperty()} 
          // disabled={property.index === data.properties.length-1}
        >Next</button>
        <button  className="ui green button"
          // onClick={() => this.prevProperty()} 
          // disabled={property.index === 0}
        >Prev</button>
           
      
     
      </div>
    );
  }
}

export default App;
