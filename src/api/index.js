import ajax from './ajax'


export const getAddress = (latitude, longitude) => ajax({
  url: `/position/${latitude},${longitude}`
})
