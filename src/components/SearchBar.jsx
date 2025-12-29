import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <div>
            <form
                onSubmit={submitHandler}
                className="
          flex flex-col sm:flex-row
          gap-4 sm:gap-5
          bg-(--c1)
          py-6 sm:py-8 lg:py-10
          px-4 sm:px-6 lg:px-10
        "
            >
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    type="text"
                    placeholder="Search anything..."
                    className="
            w-full
            border-2
            px-4 sm:px-6
            py-2.5 sm:py-3
            text-base sm:text-lg lg:text-xl
            rounded
            outline-none
          "
                />

                <button
                    className="
            active:scale-95 cursor-pointer
            border-2
            px-4 sm:px-6
            py-2.5 sm:py-3
            text-base sm:text-lg lg:text-xl
            rounded
            outline-none
          "
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar
