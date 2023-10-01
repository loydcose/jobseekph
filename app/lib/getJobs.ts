import axios from "axios"

const apiUrl = "https://jobstreet-api.onrender.com"

const getInitJobs = async (): Promise<Job[]> => {
  try {
    const { data: res } = await axios.get(`${apiUrl}/api/search`)
    return res
  } catch (error: any) {
    console.log(error.message)
    return []
  }
}

const getJobsBySearch = async (search: string): Promise<Job[]> => {
  try {
    const { data: res } = await axios.get(`${apiUrl}/api/search?q=${search}`)
    return res
  } catch (error: any) {
    console.log(error.message)
    return []
  }
}

export { getInitJobs, getJobsBySearch }
