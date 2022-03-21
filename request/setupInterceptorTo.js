export default function setupInterceptorTo(
  axios,
  interceptorResponse,
) {
  axios.interceptors.response.use((res) => {
    if (interceptorResponse) {
      return interceptorResponse(res)
    } else {
      if (parseInt(res.data.code) !== 0) {
        throw res.data
      }
      return res.data.data
    }
  })

  return axios
}
