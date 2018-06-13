<script>
  const state = {
  orderList:[],
  params:{}
}

const getters = {
  getOrderList:state => state.orderList
}


const actions = {
  ferchOrderList({commit,state}){
  let list=[
        {
        "orderId": "ddj123",
        "product": "数据统计",
        "version": "高级版",
        "period": "1年",
        "buyNum": 22,
        "date": "2016-10-10",
        "amount": 500
        },
        {
          "orderId": "yuj583",
          "product": "流量分析",
          "version": "户外版",
          "period": "3个月",
          "buyNum": 1,
          "date": "2016-05-02",
          "amount": 2200
        },
        {
          "orderId": "pmd201",
          "product": "广告发布",
          "version": "商铺版",
          "period": "3年",
          "buyNum": 12,
          "date": "2016-08-03",
          "amount": 7890
        }
      ];
    commit('updateOrderList',list)
  }
}


const mutations = {
  updateOrderList(state,payload){
    state.orderList=payload
  },
  updateParams(state,{key,val}){
    state.params[key]=val;
    console.log(state.params)
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}

</script>

