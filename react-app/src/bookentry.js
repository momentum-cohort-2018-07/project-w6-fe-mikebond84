import React from 'react'
import './index.css'

class Bookentry extends React.Component {
  constructor (props) {
    super()
    this.state = {
      isExpanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(state => ({
      isExpanded: !state.isExpanded
    }))
  }

  render () {
    let {book} = this.props
    return (
      <div className='columns'>
        <div className='column'>
          <img className='book-image' src={book.coverImageUrl}
            alt='Cover' onError={i => { i.target.style.display = 'none' }} />
        </div>
        <div className='column is-four-fifths'>
          <div id='book' key={this.idx}>
            <div id='content'>
              <h2 id='title'>
                {book.title}
              </h2>
              <h2 id='author'>
                {book.author}
              </h2>
              <h2 id='shortDescription'>
                {book.shortDescription}
              </h2>
            </div>
          </div>
          <div>
            {this.state.isExpanded ? (<div id='content2'>
              <button className='expandInfo' onClick={this.handleClick}>Less Information</button>
              <p><a href={book.url}>{book.url}</a></p>
              <p>{book.publisher}, {book.publicationDate}</p>

              <p>{book.detailedDescription}</p>
            </div>
            ) : <button className='expandInfo' onClick={this.handleClick}>More Information</button> }
          </div>
        </div>
      </div>
    )
  }
}

export default Bookentry
