import React, {Component} from 'react';
import './NavBar.css';
export default class App extends Component{

  render() {
    return(
        <div className="addbookmark">
        <h2>Add Bookmark</h2>
        {/* { error } */}
        <form className="addbookmark__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value="poop"/>
          <label htmlFor="url">Url:</label>  
          <input
            type="text"
            name="url"
            id="url"
            placeholder="url"
            value='poop'/>
          <label htmlFor="description">Description:</label>  
          <textarea
            name="description"
            id="description"
            placeholder="description"
            value='poop'/>
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            name="rating"
            id="rating"
            min="1"
            max="5"
            value='poop'/>

          <div className="addbookmark__buttons">
            <button type="submit" >Search</button>
          </div>  
        </form>
      </div>
    );
  }
}