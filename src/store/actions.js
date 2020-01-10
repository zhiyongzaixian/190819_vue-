
import {
  getAddress
} from '../api'

import {
  SAVE_ADDRESS
} from './mutations-type'


export default {
  async getAddressAction({commit}){
    let result = await getAddress(40.10038,116.36867)
    // if(result.code === 0){
    //   commit(SAVE_ADDRESS, result.data)
    // }
    
    !!(result.code === 0) && commit(SAVE_ADDRESS, result.data)
  
  }
}
