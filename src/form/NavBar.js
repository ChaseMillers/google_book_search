import React, {Component} from 'react';
import './NavBar.css';
export default class App extends Component{

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleFetch()
    };

    handleSearch(e) {
      const getValue = e.target.value;
      this.props.handleChange(getValue);
    }
    
    handleOptions(e) {
      const getValue = e.target.value;
      this.props.handleOptions(getValue);
    }

  render() {
    
    const propValue= this.props.optionsValue
    return(
        <div className="addbookmark">
        <header>
        <h1>Google Book Search</h1>
        </header>
        
        <form className="addbookmark__form" 
              onSubmit={e => this.handleSubmit(e)}>
        
        <div className="search">
          <label htmlFor="search"><p>Search:</p></label>
          <input
            type="search"
            name="search"
            id="search"
            onChange={e => this.handleSearch(e)}/>
          <button type="submit" >Search</button>
        </div>
          
        <div className='parameters'>
          <label htmlFor="bookType"><p>Book Type:</p></label>  
          <select defaultValue={propValue}
                  onChange={e=>this.handleOptions(e)}
                  name="type"
                  id="bookType">
            <option value=''>All</option>
            <option value='true'>Ebook</option>
          </select>
          
          </div>
            
        </form>
        
      </div>
    );
  }
}