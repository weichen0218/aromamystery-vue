<template>
  <div class="container" id="checkorder">
    <div class="row g-0 p-3 text-center" v-if="cart.total">
      <ul class="steps row g-0 list-unstyled mb-4">
        <li class="col-4 active"><small class="ls-3 d-block">STEP1</small><span>確認訂單</span></li>
        <li class="col-4 mx-3"><small class="ls-3 d-block">STEP2</small><span>建立訂單</span></li>
        <li class="col-4"><small class="ls-3 d-block">STEP3</small><span>完成訂單</span></li>
      </ul>
    </div>
    <div class="min-vh-50 d-flex flex-column align-items-center justify-content-center text-secondary" v-if="!cart.total">
      <!-- <span class="material-icons mb-2 fs-2"> announcement </span> -->
      <p class="fs-5" style="letter-spacing: 2px">購物車內沒有商品</p>
      <router-link class="btn btn-primary py-2 px-4 text-white" to="/products?category=all&page=1">挑選課程</router-link>
    </div>
    <div class="row g-0 justify-content-between" v-else>
      <div class="col-md-6 col-lg-5 px-3 m-0">
        <h2 class="fs-4 d-flex mb-5">
          確認訂單內容
          <!-- <button class="btn btn-sm btn-outline-primary ms-2" type="button" @click="$emitter.emit('toggle-cart', true)">修改內容</button> -->
        </h2>
        <table class="table table-warm table-borderless align-middle">
          <tbody class="tbody">
            <tr v-for="item in cart.carts" :key="item.id">
              <td width="80"><img class="table-img" :src="item.product.imageUrl" alt="" /></td>
              <td class="text-muted">
                {{ item.product.title }}
                <span class="d-block">數量：{{ item.qty }}</span>
              </td>

              <td class="text-end">NT$ {{ $cash(item.product.price) }}</td>
            </tr>
          </tbody>
        </table>
        <div class="input-group mb-4 text-center">
          <input type="text" class="form-control text-center p-2" placeholder="已套用優惠券" disabled v-if="isDiscount" />
          <input type="text" class="form-control text-center p-2" placeholder="輸入優惠碼" v-model="couponCode" v-else />
          <button type="button" class="btn btn-sm btn-primary px-3 text-white" :disabled="isDiscount" @click="useCoupon()">
            套用優惠券
            <Spinner v-if="loading" />
          </button>
        </div>
        <p class="text-primary" v-if="!isDiscount">
          總計金額：$NT <span class="fs-4">{{ $cash(cart.total) }}</span>
        </p>
        <div v-else>
          <small class="fs-7 text-muted"> 總計金額：$NT {{ $cash(cart.total) }} </small>
          <p class="text-primary">
            折扣後金額：$NT <span class="fs-4">{{ $cash(cart.final_total) }}</span>
          </p>
        </div>
      </div>
      <div class="col-md-6 p-5 bg-white min-vh-50">
        <h2 class="fs-4 mb-5">填寫訂購資訊</h2>
        <Form v-slot="{ errors, validate }" @submit="createOrder" novalidate class="needs-validation" id="order">
          <ul class="list-unstyled">
            <li class="mb-3">
              <label for="email" class="form-label"><span class="text-danger">*</span> Email </label>
              <Field type="email" name="信箱" id="email" rules="email|required" v-model="form.user.email" class="form-control" :class="{ 'is-invalid': errors['信箱'] }" placeholder="請輸入 Email" />
              <ErrorMessage name="信箱" class="invalid-feedback" />
            </li>
            <li class="mb-3">
              <label for="name" class="form-label"><span class="text-danger">*</span> 收件人姓名 </label>
              <Field type="name" id="name" name="姓名" rules="required" v-model="form.user.name" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" />
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </li>
            <li class="mb-3">
              <label for="tel" class="form-label"><span class="text-danger">*</span> 聯絡電話 </label>
              <Field
                type="tel"
                id="tel"
                name="電話"
                :rules="isphone"
                v-model="form.user.tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入手機號碼"
                inputmode="tel"
              />
              <ErrorMessage name="電話" class="invalid-feedback" />
            </li>
            <li class="mb-3">
              <label for="address" class="form-label"><span class="text-danger">*</span> 收件地址 </label>
              <Field type="text" id="address" name="地址" rules="required" v-model="form.user.address" class="form-control" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" />
              <ErrorMessage name="地址" class="invalid-feedback" />
            </li>
            <li>
              <label for="message" class="form-label">備註</label>
              <!-- <Field as="textarea" id="message" class="form-control" rows="3" /> -->
              <Field as="textarea" id="message" name="備註" type="text" rules="" v-model="form.message" class="form-control" :class="{ 'is-invalid': errors['備註'] }" rows="3" />
              <ErrorMessage name="備註" class="invalid-feedback" />
            </li>
          </ul>
          <button @click="validate" type="submit" class="btn btn-primary w-100 py-3 text-white">送出訂單</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<style>
.breadcrumb-item {
  font-size: 20px;
  color: gray;
}
.breadcrumb-item.active {
  color: black;
}
.course-img {
  object-fit: cover;
  width: 270px;
  height: auto;
}
</style>
<script>
import Spinner from '@/components/Spinner.vue'
import statusStore from '@/stores/statusStore.js'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  components: { Spinner },
  data() {
    return {
      couponCode: 'Welcome',
      isDiscount: false,
      loading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(statusStore, ['pushMessage']),
    onSubmit(values, { resetForm }) {
      console.log(JSON.stringify(values, null, 2))
    },
    isphone(value) {
      if (!value) {
        return '此電話欄位為必填'
      }
      const phoneRegex = /^(09)[0-9]{8}$/
      return phoneRegex.test(value) ? true : '請輸入正確的手機號碼'
    },
    createOrder(values, { resetForm }) {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order }).then((res) => {
        if (res.data.success) {
          console.log(res.data)
          resetForm()
          this.$router.push(`/checkout/${res.data.orderId}`)
        }
      })
    },
    useCoupon() {
      this.loading = true
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/coupon`
      const coupon = { code: this.couponCode }
      this.$http.post(url, { data: coupon }).then((res) => {
        this.loading = false
        if (res.data.success) {
          this.isDiscount = true
          this.getCart()
          this.pushMessage({ style: 'success', title: '已套用優惠券', content: '成功套用優惠券' })
        } else {
          this.pushMessage({ style: 'danger', title: '套用優惠券錯誤', content: '套用優惠券錯誤' })
        }
      })
    }
  },
  created() {
    this.getCart()
  },
  watch: {
    cart(val) {
      if (val.total !== val.final_total) {
        this.isDiscount = true
      } else {
        this.isDiscount = false
      }
    }
  }
}
</script>
