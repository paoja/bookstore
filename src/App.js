import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './firestore'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'

const Book = ({title}) => (
  <div>{title}</div>
)
class App extends Component {
  constructor(props){
    super(props)
    this.state = {books : []}
  }
  componentDidMount(){
    let self = this;
    db.collection('book').get().then( snapshot => {
      let books = []
      snapshot.forEach( doc => books.push(doc.data()) )
      self.setState({books: books})
    })
  }
  render() {
    return (
      <div>
        <Carousel>
          {
           _.map(this.state.books,book =>{
             return(
             <Carousel.Item>
              <img height={300} src={book.imageUrl}/>
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.price}</p>
              </Carousel.Caption>
            </Carousel.Item>   
            )
           })
          }
        </Carousel>
      </div>
    );
  }
}  


export default App;
