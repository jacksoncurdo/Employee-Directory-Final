import "./App.css";
import { Component } from "react";
import API from "./utils/API";
import AllUsers from "./Components/AllUsers";
import SearchForm from "./Components/SearchForm";
import UserSort from "./Components/UserSort";

// Setting the state to filtered results 
class App extends Component {
  constructor() {
    super(); 
    this.state = {
      search: "",
      users: [],
      filterResults: []
    }; 
  }
  
  // Calling the "Random User API when the page loads then updating the state so that the user see the results of the API call"
  componentDidMount() {
    API.search().then((results) => {
      this.setState({ users: results.data.results });
    });

  }
  handleInputChange = (event) => {
    this.setState({search:event.target.value})
  };

  // This is using the state to filer the results and return first name and last name of a searched employee
  render() {
    let filterResults = this.state.users.filter((each) => {
      return (
        each.name.first
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        each.name.last
          .toLowerCase()
          .includes(this.state.search.toLowerCase()));
    });

    // This is returning the html with a search form to search employees by name or email using sort to filter the results
    return (
      <div className="App">
        <div className="background">
        <div className="header">
          <h1 className="display-4">Employee Directory</h1>
          <p> Search for an employee by entering their name or email below.</p>
          
          <SearchForm 
        handleInputChange={this.handleInputChange}
        name={this.search}
         />
        </div>
        {<UserSort emailSort={this.emailSort}/>}
        <AllUsers users={filterResults} /> 
      </div>
      </div>
     
      
    );
  }
}

export default App;