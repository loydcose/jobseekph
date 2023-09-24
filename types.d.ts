interface Job {
  title: string
  company: string
  location: string
  salary?: string | undefined
  image: string | null
  link: string
}

// interface JobSearch extends Job {
//   totalJobs: string
// }