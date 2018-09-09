import React, { Component } from 'react'
import './index.css'
import 'bulma/css/bulma.css'
import Bookentry from './Bookentry'
import request from 'superagent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
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

  render () {
    return (
      <div className='books'>
        {(this.state.books.map((book, idx) =>
          <Bookentry key={idx} book={book} />))}
      </div>
    )
  }
}

export default App
