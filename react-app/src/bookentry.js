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
      <div className='book'>
        <div className='content'>
          <h1 className='title'>
            {book.title}
          </h1>
        </div>
      </div>

    )
  }
}

export default Bookentry
