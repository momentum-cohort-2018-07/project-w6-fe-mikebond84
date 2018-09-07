import React, { Component } from 'react'
import './index.css'
import 'bulma/css/bulma.css'
import request from 'superagent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
  }

  render () {
    console.log('render')
    return (
      <div className='app'>
        {this.state.books.map((book, idx) =>
          <div key={idx}>
            {book.title}
            {book.author}
            {book.shortDescription}
            {book.coverImageUrl}
            {book.url}
            {book.publisher}
            {book.publication}
            {book.detailedDescription}
          </div>
        )}
      </div>
    )
  }

  componentDidMount () {
    request
      .get('http://localhost:4000/books')
      .then(res => {
        this.setState({
          books: res.body
        })
      })
  }
}

export default App
