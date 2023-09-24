"use client"

import { Search, ExternalLink, X, SearchX } from "lucide-react"
import Image from "next/image"
import { data } from "./data"
import Link from "next/link"
import { useState } from "react"
import SearchComponent from "./components/search"

interface PropTypes {
  initialJobs: Job[]
}

export default function Home({initialJobs}: PropTypes) {
  const [jobs, setJobs] = useState(initialJobs)

  console.log(jobs)

  return (
    <main className="bg-zinc-100 min-h-screen py-16">
      <section className="max-w-4xl mx-auto w-11/12">
        <div className="flex items-center gap-3 w-fit mx-auto mb-8">
          <div className="w-[70px] h-[70px]">
            <Image
              src="/company-logo.png"
              alt="jobseekph"
              width={70}
              height={70}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="font-extrabold tracking-tighter text-2xl text-blue-600">
            Jobseekph
          </h2>
        </div>

        <SearchComponent setJobs={setJobs} />

        <div className="flex items-center mb-8 gap-2  mx-auto w-fit">
          <Search className="text-zinc-400" />
          <p className="text-zinc-500 text-sm">28,726 Python Developer jobs</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mb-8">
          {jobs.map((job: Job) => (
            <Link
              href={job.link}
              key={job.title}
              className="p-4 bg-white rounded-md shadow-md hover:shadow-lg hover:scale-[101%] transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="w-[59px] h-[59px] mb-2">
                  <Image
                    src={job.image || "/company-logo.png"}
                    alt={job.company}
                    width={59}
                    height={59}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <ExternalLink className="text-zinc-300 group-hover:text-blue-600 transition-all" />
                </div>
              </div>
              <p className="text-blue-600 italic mb-1 text-sm">{job.company}</p>
              <h2 className="mb-4 font-bold tracking-tight leading-5">
                {job.title}
              </h2>
              <p className="mb-1 text-sm text-zinc-500">{job.location}</p>
              <p className="font-bold leading-5">{job.salary}</p>
            </Link>
          ))}
        </div>

        <p className="text-zinc-600 text-center">Loading...</p>
        <div className="flex flex-col justify-center items-center gap-2 w-fit mx-auto">
          <SearchX className="text-zinc-400" />
          <p className="text-zinc-600 text-center">Not found</p>
        </div>
      </section>
    </main>
  )
}