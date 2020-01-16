
import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  SAVE_SHOPLIST,
  SAVE_USER,
  SAVE_TOKEN,
  LOGOUT
} from './mutations-type'



export default {
  [SAVE_ADDRESS] (state, address) {
    // let result = await getAddress(40.10038,116.36867)
    // console.log('mutation', result);
    // state.address = result.data
  
    state.address = address
  },
  [SAVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [SAVE_SHOPLIST] (state, shopList) {
    state.shopList = shopList
  },
  [SAVE_USER] (state, user) {
    state.user = user
  },
  [SAVE_TOKEN] (state, token) {
    state.token = token
  },
  [LOGOUT] (state) {
    // 情况了vuex中的用户信息
    state.user = {}
    state.token = ''
    // 情况localStorage中的token
    localStorage.removeItem('token_key')
  }
}
