import React,{Component} from 'react';
import CardList from './CardList';
import users from "./users";
import "./robots.css";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { 
    users:users,
    searchField:''
   }
   onSearchBar=(e)=>{
e.preventDefault();
console.log(e.target.value)
this.setState({searchField:e.target.value})
   }
  render() { 
    return ( 
      <div className="one">
           <h2>Robots Friends</h2>
         <input className="inputcolor" type="text"  value={this.state.searchField}
      onChange={this.onSearchBar}/>
      
       <div className="three">
       <CardList  users={this.state.users}/>
       </div>
        
    </div>
     );
  }
}
 
export default App;