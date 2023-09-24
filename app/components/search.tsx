"use client"

import { X } from "lucide-react"
import { Dispatch, useRef, FormEvent, SetStateAction } from "react"
import { getInitialJobs } from "../lib/getJobs"

interface PropTypes {
  setJobs: Dispatch<Job[]>  
  setLoading: Dispatch<SetStateAction<boolean>>
}

export default function Search({ setJobs, setLoading }: PropTypes) {
  const searchRef = useRef<HTMLInputElement>(null)

  const getSearchedJobs = async () => {
    setLoading(true)
    try {
      if (searchRef.current) {
        let fetchJobs = []
        if (searchRef.current.value.trim() === "") {
          fetchJobs = (await getInitialJobs()) || []
        } else {
          fetchJobs = (await getInitialJobs(searchRef.current.value)) || []
        }
        setJobs(fetchJobs)
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getSearchedJobs()
  }

  const handleClear = () => {
    if (searchRef.current) {
      searchRef.current.value = ""
    }
    getSearchedJobs()
  }

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className="mx-auto w-full flex items-center gap-2 p-2 focus-within:ring-1 focus-within:ring-blue-600 rounded-sm mb-8 bg-white shadow-md"
    >
      <input
        ref={searchRef}
        type="text"
        className="py-2 px-6 text-sm min-w-0 w-full outline-none"
        placeholder="Search jobs..."
      />
      <button
        onClick={handleClear}
        type="button"
        className="p-1 rounded-full hover:bg-zinc-100 text-zinc-400"
      >
        <X className="" size={20} />
      </button>
      <button
        type="submit"
        className="bg-blue-600 px-6 py-2 text-white rounded-sm hover:bg-blue-700 transition-colors text-sm"
      >
        Search
      </button>
    </form>
  )
}
