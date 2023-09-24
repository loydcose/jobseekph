import Home from "./home"
import { getInitialJobs } from "./lib/getJobs"

export default async function page() {
  const initialJobs = await getInitialJobs() || []

  return <Home initialJobs={initialJobs} />
}
