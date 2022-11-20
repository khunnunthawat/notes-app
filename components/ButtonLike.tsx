import React from 'react'
import { useState } from 'react'
import classNames from 'classnames'

const ButtonLike = () => {
  const [likeCount, setLikeCount] = useState(100)
  const [dislikeCount, setDislikeCount] = useState(25)
  const [activeBtn, setActiveBtn] = useState('none')

  const handleLikeClick = () => {
    if (activeBtn === 'none') {
      setLikeCount(likeCount + 1)
      setActiveBtn('liked')
      return
    }

    if (activeBtn === 'liked') {
      setLikeCount(likeCount - 1)
      setActiveBtn('none')
      return
    }

    if (activeBtn === 'disliked') {
      setLikeCount(likeCount + 1)
      setDislikeCount(dislikeCount - 1)
      setActiveBtn('liked')
    }
  }

  const handleDisikeClick = () => {
    if (activeBtn === 'none') {
      setDislikeCount(dislikeCount + 1)
      setActiveBtn('disliked')
      return
    }

    if (activeBtn === 'disliked') {
      setDislikeCount(dislikeCount - 1)
      setActiveBtn('none')
      return
    }

    if (activeBtn === 'liked') {
      setDislikeCount(dislikeCount + 1)
      setLikeCount(likeCount - 1)
      setActiveBtn('disliked')
    }
  }

  const btn =
    'bg-yellow-400 hover:bg-gray-700 text-white text-center py-2 px-4 rounded'

  return (
    <div className='grid grid-cols-2 gap-4'>
      <button
        onClick={() => handleLikeClick()}
        className={classNames(btn, activeBtn === 'liked' ? 'disliked' : '')}
      >
        Like | {likeCount}
      </button>
      <button
        onClick={() => handleDisikeClick()}
        className={classNames(btn, activeBtn === 'disliked' ? 'liked' : '')}
      >
        Dislike | {dislikeCount}
      </button>
    </div>
  )
}

export default ButtonLike
