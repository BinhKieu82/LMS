import React, { useState } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'

const ReadMore = ({content}) => {

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p className='testimonials__quote__text'>
      {isReadMore ? content.slice(0, 10): content }
      {content.length > 10 &&
        <span onClick={toggleReadMore}>
          {isReadMore ? '...read more' : ' ...show less'}
        </span>
      }
    </p>
  )
}

export default ReadMore