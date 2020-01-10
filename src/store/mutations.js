
import {
  SAVE_ADDRESS
} from './mutations-type'



export default {
  async [SAVE_ADDRESS] (state, address) {
    // let result = await getAddress(40.10038,116.36867)
    // console.log('mutation', result);
    // state.address = result.data
  
    state.address = address
  }
}
