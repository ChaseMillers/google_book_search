import React, {Component} from 'react';
import './App.css';
import NavBar from './form/NavBar';
import Results from './form/Results';
export default class App extends Component{

  constructor(props) {
    super(props);
    this.state= {
      books: [],
      searchTerm:'',
      optionsValue:'',
    }
  };

  changeSearch(searchTerm){
    this.setState({searchTerm})
    console.log('searchTerm',{searchTerm})
  };

  changeOptions(optionsValue){
    this.setState({optionsValue})
    console.log('optionsValue',{optionsValue})
  };

  fetchData() {
      const url = 'https://www.googleapis.com/books/v1/volumes?q='+ this.state.searchTerm;
      const options = {
        method: 'GET',
      };

      fetch(url, options)
      .then(results => {
        if(!results.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return results;
      })

      //this puts are fetched data into are books
      .then(results => results.json())
        .then(data => {
          this.setState({
            books:data.items,
            error:"",
          });
        })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
}

  render() {
    const errorMessage = this.state.error 
          ? <div className="error">{this.state.error}</div>
          : "";
    return(
      <div>
        <NavBar handleFetch={e=>this.fetchData(e)}
                handleChange={ e=>this.changeSearch(e)} 
                handleOptions={ e=>this.changeOptions(e)}
                search={this.state.searchTerm}
                optionsValue={this.state.optionsValue}/>
        <Results books={this.state.books} 
                 error= {errorMessage}
                 optionsValue={this.state.optionsValue}/>
        
      </div>
    )
  };
}; 



