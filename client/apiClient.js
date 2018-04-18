import request from 'superagent'

const rootUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='
const nasaKey = '&api_key=RHpVzzSLOU4DXoxv4wNQXSLqBORvpMrNzLq9V4Ub'
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1001&camera=fhaz&api_key=DEMO_KEY

export function getImage (day) {
  return request.get(rootUrl + day + '&camera=fhaz' + nasaKey)
    .then(res => {
      return res.body.photos[0]
    })
}
