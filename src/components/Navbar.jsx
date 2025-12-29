import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-(--c2)">
      <div className="max-w-9xl mx-auto 
                      flex flex-col sm:flex-row 
                      sm:justify-between sm:items-center
                      gap-4 sm:gap-0
                      py-4 sm:py-6 
                      px-4 sm:px-10">

        <Link
          to="/"
          className="font-medium text-xl sm:text-2xl text-center sm:text-left"
        >
          MediaSearch
        </Link>

        <div className="flex justify-center sm:justify-end gap-3 sm:gap-5">
          <Link
            to="/"
            className="text-sm sm:text-base font-medium
                       active:scale-95
                       bg-(--c4) text-(--c1)
                       rounded px-3 sm:px-4 py-2"
          >
            Search
          </Link>

          <Link
            to="/collection"
            className="text-sm sm:text-base font-medium
                       active:scale-95
                       bg-(--c4) text-(--c1)
                       rounded px-3 sm:px-4 py-2"
          >
            Collection
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
