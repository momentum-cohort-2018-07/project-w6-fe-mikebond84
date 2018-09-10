import React from 'react'
import './index.css'

class Bookentry extends React.Component {
  constructor (props) {
    super()
    this.state = {
    }
  }

  render () {
    let {book} = this.props
    return (
      <div id='accordion'>
        <div className='card'>
          <div className='card-header' id='headingOne'>
            <h5 className='mb-0'>
              <div id='book' key={this.props.idx}>
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
                <div id='image'>
                  <img className='book-image' src={book.coverImgUrl} alt='Cover' id='box' />
                </div>
              </div>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                More Information
              </button>
            </h5>
          </div>
          <div id='collapseOne' className='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>
            <div className='card-body'>
              <div id='content2'>
                <p><strong>URL:</strong> <a href={book.url}>{book.url}</a></p>
                <p><strong>Publisher:</strong> {book.publisher}</p>
                <p><strong>Publication Date:</strong> {book.publicationDate}</p>
                <p><strong>Full Description:</strong> {book.detailedDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Bookentry
