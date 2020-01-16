
import {
  getAddress,
  getCategorys,
  getShopList
} from '../api'

import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  SAVE_SHOPLIST,
  SAVE_USER,
  SAVE_TOKEN
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
    if(result.code === 0){
      commit(SAVE_CATEGORYS, result.data)
      typeof fn === 'function' && fn()
    }
  },
  async getShopListAction({commit}){
    let result = await getShopList(40.10038,116.36867)
    !!(result.code === 0) && commit(SAVE_SHOPLIST, result.data)
  },
  async getUserInfoAction({commit}, user){
    commit(SAVE_TOKEN, user.token)
    // 将token存入本地localStorage
    localStorage.setItem('token_key', user.token)
    delete user.token
    commit(SAVE_USER, user)
  }
}
