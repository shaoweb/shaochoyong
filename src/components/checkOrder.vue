<template>
  <div>
    <my-dialog :is-show='isShowCheckOrder' @on-close='hideCheckOrder'>
      请检查你的支付状态！
      <div class="button" @click='checkStatus'>
        支付成功
      </div>
      <div class="button" @click='checkStatusErr'>
        支付失败
      </div>
    </my-dialog>
    <my-dialog :is-show='isShowSuccessDialog' @on-close='toOrderList'>
      支付成功
    </my-dialog>
    <my-dialog :is-show='isShowFailDialog' @on-close='toBuyPage'>
      支付失败
    </my-dialog>
  </div>
</template>

<script>
import Dialog from '../components/basic/dialog.vue'
export default {
  props:{
    isShowCheckOrder:{
      type:Boolean,
      default:false
    }
  },
  components:{
    myDialog:Dialog
  },
  data () {
    return{
      isShowSuccessDialog:false,
      isShowFailDialog:false
    }
   },
   methods:{
    checkStatus(){
      this.isShowSuccessDialog = true,
      this.$emit('on-close');
    },
    checkStatusErr(){
      this.isShowFailDialog = true,
      this.$emit('on-close');
    },
    toOrderList(){
      this.isShowSuccessDialog = false,
      this.$router.push({path: '/orderList'})
    },
    toBuyPage(){
      this.isShowFailDialog = false,
      this.$router.push({path: '/detail'})
    },
    hideCheckOrder(){
      this.$emit('on-close');
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
