import React from 'react'
import { IoSearch } from 'react-icons/io5'

export const SearchPage = ({handelSearch, setSearchText, searchText}) => {
  return (
    <form onSubmit={handelSearch}>
    <div
      className="lg:w-96 md:w-full w-72  flex connte items-center lg:rounded-lg md:rounded-lg rounded-l-lg rounded-lg bg-slate-50 hover:outline outline-[#CD5B59] transition-all duration-150 ease-in-out"
    >
      <input
        className="lg:w-96 md:w-full w-72  lg:rounded-lg md:rounded-lg pl-5 focus:outline-none text-gray-800"
        type="text"
        placeholder="Enter search text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <br />
      <button
        type="submit"
        className="text-xl text-white bg-[#CD5B59] py-3 pr-5 rounded-r-lg pl-4 hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out"
      >
        <IoSearch />
      </button>
    </div>
  </form>
  )
}
