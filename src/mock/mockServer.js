import Mock from 'mockjs'
import shopDatas from './data.json'
// 测试
Mock.mock('/api/test2', 123)


// 商家数据接口
Mock.mock('/api/getShopDatas', {code: 0, data: shopDatas})
