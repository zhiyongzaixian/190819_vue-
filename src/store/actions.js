
import {
  getAddress,
  getCategorys,
  getShopList
} from '../api'

import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  SAVE_SHOPLIST
} from './mutations-type'


export default {
  async getAddressAction({commit}){
    let result = await getAddress(40.10038,116.36867)
    // if(result.code === 0){
    //   commit(SAVE_ADDRESS, result.data)
    // }
    
    !!(result.code === 0) && commit(SAVE_ADDRESS, result.data)
  
  },
  async getCategorysAction({commit}, fn){
    let result = await getCategorys()
    if(!!(result.code === 0)){
      commit(SAVE_CATEGORYS, result.data)
      typeof fn === 'function' && fn()
    }
  },
  async getShopListAction({commit}){
    let result = await getShopList(40.10038,116.36867)
    !!(result.code === 0) && commit(SAVE_SHOPLIST, result.data)
  }
}
