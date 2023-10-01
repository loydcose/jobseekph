export const getApiUrl = () => {
  if (process.env.NODE_ENV === "production") {
    // change to render
    return "https://jobseekph.vercel.app"
  } else {
    return "http://localhost:5000"
  }
}


