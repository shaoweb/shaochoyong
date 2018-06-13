<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections='productList' @on-change='productChange'></v-selection>
      </div>

      <div class="order-list-option">
        开始日期：<v-date-picker @on-change='changeDate("startDate",$event)' :width="'150px'"></v-date-picker>
      </div>

      <div class="order-list-option">
        结束日期：<v-date-picker @on-change='changeDate("endDate",$event)' :width="'150px'"></v-date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" class="order-query" v-model.lazy='query'>
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for='item in tableHeads' :key='item.key' @click="changeOrderType(item)" :class="{active:item.active}">{{item.label}}</th>
        </tr>
        <tr v-for='(data,index) in tableData' :key='index'>
          <td v-for='item in tableHeads' :key='item.key'>
            {{data[item.key]}}
            <span v-if='item.key=="amount"'>元</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from '../components/basic/selection.vue'
import VDatePicker from '../components/basic/datepicker.vue'
import _ from 'lodash'
export default {
  components:{
    VSelection,
    VDatePicker
  },
  data(){
    return {
      product:{
          label: '数据统计',
          value: 0
      },
      query:'',
      startDate:'',
      endDate:'',
      productList: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      currentOrder: 'desc',
      //tableData: [ ],
    }
  },
  computed:{
    tableData(){
      return this.$store.getters.getOrderList
    }
  },
  watch:{
    query(){
      this.$store.commit('updateParams',{
        key:'query',val:this.query
      })
    }
  },
  methods:{
    productChange(obj){
      this.$store.commit('updateParams',{
        key:'productID',val:obj.value
      })
    },
    changeDate(attr,date){
      this[attr]=date,
      this.$store.commit('updateParams',{
        key:attr,val:date
      })
    },
    changeOrderType(headItem){
      this.tableHeads.map((item) => {
        item.active = false
        return item
      });
      headItem.active = true;
      this.currentOrder = (this.currentOrder=='asc') ? 'desc' : 'asc' ;
      this.tableData = _.orderBy(this.tableData,headItem.key,this.currentOrder)
    },
    getList(){
      this.tableData=this.list
    }
  },
  mounted(){
    this.$store.dispatch('ferchOrderList');
  }
}
</script>
<style>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
  margin-left:60px;
}
.order-list-option:first-child {
  padding-left: 0;
  margin-left:0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>
