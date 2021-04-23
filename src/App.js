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
    const Filteredusers=users.filter(user=>{
      return user.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return ( 
      <div>
         <div className="one">
           <h1>Robots Friends</h1>
           <input className="inputcolor" type="text"  value={this.state.searchField}
      onChange={this.onSearchBar}/>
      <div>&nbsp;</div>
        
       <div className="three">
       <CardList  users={Filteredusers}/>
       </div>
        
    </div>
      </div>
     
     );
  }
}
 
export default App;