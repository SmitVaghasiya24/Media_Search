import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice"

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (
    <div className="overflow-auto px-4 sm:px-6 lg:px-10 py-6">

      {collection.length > 0 ? (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-medium text-center sm:text-left">
            Your Collection
          </h2>
          <button
            onClick={clearAll}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium rounded text-white"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl py-10 text-gray-300 text-center font-medium">
          Collection is Empty
        </h2>
      )}

      <div className="grid w-full gap-6 px-4 sm:px-10
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {collection.map((item) => (
          <div key={item.id} className="box">
            <CollectionCard item={item} />
          </div>
        ))}

      </div>

    </div>
  )
}

export default CollectionPage
