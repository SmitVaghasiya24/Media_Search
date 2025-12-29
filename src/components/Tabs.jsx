import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['photos', 'videos', 'gif']

  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex flex-wrap justify-center sm:justify-center gap-3 sm:gap-5 px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTabs(elem))}
          className={`
            ${activeTab == elem ? 'bg-blue-700' : 'bg-gray-500'}
            transition cursor-pointer active:scale-95
            px-4 sm:px-5 py-1.5 sm:py-2
            text-sm sm:text-base
            rounded uppercase text-white
          `}
        >
          {elem}
        </button>
      ))}
    </div>
  )
}

export default Tabs
