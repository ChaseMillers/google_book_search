import React, {Component} from 'react';
import './Results.css';
export default class Results extends Component{

    render() {
      
      console.log("options value", this.props.optionsValue)
      const ebooks = this.props.books
      .map ((book, i)=> {
        if (book.saleInfo.isEbook)
        {return(
          <div key={i}>
           <h2>{book.volumeInfo.title}</h2>
           <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover"/>
           <br/>
           <p>{book.searchInfo.textSnippet}</p>
           <a href = {book.volumeInfo.infoLink}  target="_blank" rel="noopener noreferrer">
           Google Books Link
           </a>
        </div>
        )} 
      else {
        return ("")
      }
    })

    const books = this.props.books
      .map ((book, i)=> {
        return(
          <div key={i}>
           <h2>{book.volumeInfo.title}</h2>
           <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover"/>
           <br/>
           <p>{book.searchInfo.textSnippet}</p>
           <a href = {book.volumeInfo.infoLink}  target="_blank" rel="noopener noreferrer">
           Google Books Link
           </a>
        </div>
        )
    })

    const filter = this.props.optionsValue 
    ? <div>{ebooks}</div>
    : <div>{books}</div>;
      
      return (
        <div className="bookList">
         
         {this.props.error} 
         {filter}
        </div>
      );
    }
  }
  
  
  Results.defaultProps = {
    books: []
  };