import ajax from './ajax'

/* 根据经纬度获取位置详情 */
export const getAddress = (latitude, longitude) => ajax({
  url: `/position/${latitude},${longitude}`
})


/* 获取食品分类列表 */
export const getCategorys = () => ajax({
  url: '/index_category'
})


/*  根据经纬度获取商铺列表 */
export const getShopList = (latitude, longitude) => ajax({
  url: '/shops',
  params: {
    latitude,
    longitude
  }
})


/*  发送短信验证码  */
export const sendCode = ({phone}) => ajax({
  url: '/sendcode',
  params: {
    phone
  }
})

