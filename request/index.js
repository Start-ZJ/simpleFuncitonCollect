import setupInterceptorTo from './setupInterceptorTo'
import Axios from 'axios'
import getApiPath from './getApiPath'
import jsonRecursionParse from './jsonRecursionParse'
import qs from 'qs'

const axios = setupInterceptorTo(Axios.create({
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  }
}), (res) => {
  res.data.data = jsonRecursionParse(res.data.data)
  if (res.data.data && res.data.data.errcode && res.data.data.errcode !== '0') {
    throw new Error(res.data.data.errmsg)
  }

  if (res.data.code && +res.data.code !== 0) {
    throw res.data
  }
  return res.data.data
})

axios.defaults.baseURL = getApiPath()

axios.interceptors.request.use((req) => {
  if (/api\/qrshort/.test(req.url)) {
    if (
      process.env.NODE_ENV === 'development' &&
      window.location.href.includes('qs_')
    ) {
      req.baseURL = axios.defaults.baseURL;
    }
  }
  if (/api\/qrshort/.test(req.url)) {
    req.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    const newData = {}
    Object.keys(req.data).forEach((key) => {
      if (typeof req.data[key] === 'object') {
        newData[key] = JSON.stringify(req.data[key])
      } else {
        newData[key] = req.data[key]
      }
    })
    req.data = qs.stringify(newData)
  }
  req.data = qs.stringify(req.data)
  return req
})

export default axios
