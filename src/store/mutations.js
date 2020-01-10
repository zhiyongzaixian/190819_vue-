
import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS
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
  }
}
