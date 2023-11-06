<template>
  <Loading :active="isLoading"></Loading>
  <div class="container" id="checkout">
    <div class="row g-0 p-3 text-center" v-if="order.id">
      <ul class="steps row g-0 list-unstyled mb-4">
        <li class="col-4"><small class="ls-3 d-block">STEP1</small><span>確認訂單</span></li>
        <li class="col-4 mx-3" :class="order.is_paid ? '' : 'active'"><small class="ls-3 d-block">STEP2</small><span>建立訂單</span></li>
        <li class="col-4" :class="order.is_paid ? 'active' : ''"><small class="ls-3 d-block">STEP3</small><span>完成訂單</span></li>
      </ul>
    </div>
    <div class="row g-0 justify-content-between">
      <div class="col-md-6 col-lg-5 px-3 m-0">
        <h2 class="fs-4 d-flex mb-5">
          訂單內容&nbsp;
          <span class="text-danger" v-if="!order.is_paid">(未付款)</span>
          <span class="text-success" v-else>(已付款)</span>
        </h2>
        <table class="table table-warm table-borderless align-middle">
          <tbody class="tbody">
            <tr v-for="item in order.products" :key="item.id">
              <td width="80" class="ps-0"><img class="table-img" :src="item.product.imageUrl" alt="" /></td>
              <td class="text-muted">
                {{ item.product.title }}
                <span class="d-block">數量：{{ item.qty }}</span>
              </td>
              <td class="text-end">NT$ {{ $cash(item.product.price) }}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-primary border-top">
          總計金額：$NT <span class="fs-4">{{ $cash(order.total) }}</span>
        </p>
      </div>
      <div class="col-md-6 p-4 py-5 p-md-5 bg-white">
        <h2 class="fs-4 d-flex mb-4">訂購資訊</h2>
        <ul class="list-unstyled">
          <li class="d-flex">
            <p class="col-4">訂單金額：</p>
            <p class="col" :class="order.is_paid ? 'text-success' : 'text-danger'">
              $ <b class="fs-5">{{ $cash(Math.round(order.total)) }}</b> NTD
            </p>
          </li>
          <li class="d-flex">
            <p class="col-4 text-nowrap">訂單編號：</p>
            <p class="col">{{ order.id }}</p>
          </li>
          <li class="d-flex">
            <p class="col-4">訂購時間：</p>
            <p class="col">{{ order.time }}</p>
          </li>
          <li class="d-flex" v-if="code">
            <p class="col-4">優惠券代碼：</p>
            <p class="col">{{ code }}</p>
          </li>
          <li class="d-flex">
            <p class="col-4">Email：</p>
            <p class="col">{{ user.email }}</p>
          </li>
          <li class="d-flex">
            <p class="col-4">收件人姓名：</p>
            <p class="col">{{ user.name }}</p>
          </li>
          <li class="d-flex">
            <p class="col-4">聯絡電話</p>
            <p class="col">{{ user.tel }}</p>
          </li>
          <li class="d-flex">
            <p class="col-4">收件地址：</p>
            <p class="col">{{ user.address }}</p>
          </li>
          <li class="d-flex">
            <p class="col-4">備註：</p>
            <p class="col" v-if="order.message">{{ order.message }}</p>
            <p class="col" v-else>無</p>
          </li>
        </ul>
        <button type="submit" class="btn btn-primary w-100 py-3 mt-5" v-if="!order.is_paid" @click="payOrder">信用卡付款</button>
      </div>
    </div>
  </div>
  <!-- <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ $cash(item.product.price) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ $cash(order.total) }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      order: {},
      user: {},
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder() {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order
          this.order.time = new Date(this.order.create_at * 1000).toLocaleString('zh-TW', { hour12: false })
          this.user = this.order.user
          console.log(this.order)
          console.log(this.order.time)
        }
      })
    },
    payOrder() {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.getOrder()
        }
      })
    }
  },
  created() {
    this.orderId = this.$route.params.orderId
    console.log(this.order)
    this.getOrder()
  }
}
</script>
