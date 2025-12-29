/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({ item }) => {

  const dispatch = useDispatch()

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }

  return (
    <div
      className="
        relative bg-white rounded-xl overflow-hidden
        h-72 sm:h-80
        w-full
      "
    >
      <a target="_blank" className="h-full block" href={item.url}>
        {item.type == 'photo' && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
            loading='lazy'
          />
        )}

        {item.type == 'video' && (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
            preload='none'
          />
        )}

        {item.type == 'gif' && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
            loading='lazy'
          />
        )}
      </a>

      <div
        id="bottom"
        className="
          absolute bottom-0 w-full
          flex justify-between items-center gap-3
          px-3 sm:px-4 py-4 sm:py-6
          text-white
          bg-gradient-to-t from-black/70 to-transparent
        "
      >
        <h2 className="text-sm sm:text-lg font-semibold capitalize h-10 sm:h-14 overflow-hidden">
          {item.title}
        </h2>

        <button
          onClick={() => removeFromCollection(item)}
          className="
            bg-indigo-600 active:scale-95
            text-white rounded
            px-2 sm:px-3 py-1
            text-xs sm:text-sm
            font-medium
          "
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CollectionCard
