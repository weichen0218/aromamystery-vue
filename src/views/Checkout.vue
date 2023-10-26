<template>
  <!-- <div class="container">
    <div class="my-5">
      <ul class="nav orderNav justify-content-around">
        <li class="nav-item"><a disabled class="nav-link">購物清單</a></li>
        <li class="nav-item"><a disabled class="nav-link">填寫資料</a></li>
        <li class="nav-item"><a disabled class="nav-link">確認訂單</a></li>
        <li class="nav-item"><a disabled class="nav-link">交易結果</a></li>
      </ul>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
    </div>
  </div> -->
  <!-- :class="progress.current == 'cart' ? 'active' : ''" -->
  <!-- <div class="row">
      <div class="col-lg-7">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb px-0">
            <li class="breadcrumb-item active">選擇課程</li>
            <li class="breadcrumb-item">填寫資料</li>
            <li class="breadcrumb-item">付款結帳</li>
            <li class="breadcrumb-item">結帳成功</li>
          </ol>
        </nav>
        <div class="cart">
          <div class="h2">選擇課程</div>
          <section class="mt-4">
            <table class="table table-borderless align-middle text-center">
              <thead class="thead">
                <tr>
                  <th>商品名稱</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>移除</th>
                </tr>
              </thead>
              <tbody class="tbody">
                <tr v-for="item in getCartList.cartList" :key="item.id">
                  <td width="100"><img class="table-img" :src="item.product.image" alt="" /></td>
                  <td class="text-primary">{{ item.product.title }}</td>
                  <td>
                    <select :value="item.qty" @change="(event) => setCartQty(item.productId, event)" class="form-select">
                      <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                    </select>
                  </td>
                  <td>{{ item.subtotal }}</td>
                  <td>
                    <button @click.prevent="removeFromCart(item.id)" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="border-top-1">
                  <td colspan="5" class="text-end totalPrice">總金額 NT$ {{ getCartList.totalPrice }}</td>
                </tr>
              </tfoot>
            </table>
            <div class="bg-light d-flex align-items-center ng-scope">
              <img
                ng-alt="JS 框架組合包"
                class="course-img"
                src="https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/web%2Forder%2Fproducts%2Fz_js-plus_js-core_vue3%400.5x.png?alt=media&amp;token=a591f84b-1baf-41d6-95f0-79269731aea2"
              />
              <h5 class="mb-0 mx-3 custom-fs-lg ng-binding">JS 框架組合包</h5>
              <div class="text-right text-nowrap mx-3 ml-auto">
                <p class="mb-0 custom-fs-normal font-weight-bold ng-binding">NT$ 7,500</p>

                <p ng-if="item.origin_price !== item.price" class="mb-0 text-muted ng-scope" style="">
                  <small><del class="ng-binding">原價：10,000</del></small>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div> -->

  <div class="container">
    <div class="row g-0 p-3 text-center">
      <ul class="steps row g-0 list-unstyled mb-4">
        <li class="col-4 active"><small class="ls-3 d-block">STEP1</small><span>確認訂單</span></li>
        <li class="col-4 mx-3"><small class="ls-3 d-block">STEP2</small><span>建立訂單</span></li>
        <li class="col-4"><small class="ls-3 d-block">STEP3</small><span>完成訂單</span></li>
      </ul>
    </div>
    <div class="row g-0 justify-content-between">
      <div class="col-md-6 col-lg-5 px-3 m-0">
        <h2 class="fs-4 d-flex mb-5">確認訂單內容 <button class="btn btn-sm btn-outline-primary ms-2" type="button">修改內容</button></h2>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center mb-4">
            <div
              class="cart-img"
              style="
                background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/panya/1627476685625.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=OLLvHPrRYnoYfHoOXnCLFX4PKeOfdLx3nZrVc4ZLSyTuwHscl0aEaBVkgMNHPjAbC97QSGuvUt4Pg4SXlGn4V5CAZ2ZwSer7y9evXgkUI0EIpIDmx2gBCSZvTzH2YwUl%2FGYqPbD40CMaq1JyGTgurQKcXPFXmHcIPZsqpLqo%2B2gX9sXQXjq8bVaMLcouVWaUK75ZO4DiXrAH%2BuL5xWkrBNgj5sN40rgBWU82zpdCzX8yXQeZq%2Bs7dbll3IAEe%2BvpgLb6SovHzzV7OR2pByz%2Fi86yx%2FfAT3T1ScoerMcWxubrdgMHjSlsqA0cn%2BLMWMqGolJNuqyusCO1zNHwlChVhw%3D%3D');
              "
            ></div>
            <div class="cart-cont col px-3 d-flex">
              <div class="col-7 pe-2">
                <p class="m-0">歐式麵包</p>
                <small>數量：1</small>
              </div>
              <div class="col-5 ls-1 text-end">$ 120 NTD</div>
            </div>
          </li>
        </ul>
        <div class="input-group mb-4">
          <input type="text" class="form-control p-2" placeholder="輸入優惠碼" /><button type="button" class="btn btn-sm btn-primary px-3">
            套用優惠券
            <div class="loading bounceball d-none fade"><span></span><span></span><span></span></div>
          </button>
        </div>
        <p class="text-primary">總計金額：$ <span class="fs-4">120</span> NTD</p>
      </div>
      <div class="col-md-6 p-5 bg-white min-vh-50">
        <h2 class="fs-4 mb-4">填寫訂購資訊</h2>
        <Form v-slot="{ errors, validate }" @submit="createOrder" novalidate class="needs-validation" id="checkout">
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
          <button @click="validate" type="submit" class="btn btn-primary w-100 py-3 mt-5 text-white">送出訂單</button>
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
.steps li {
  width: calc(33.33333% - 0.66667rem);
  background: rgba(237, 235, 234, 0.6);
  padding: 1rem;
  text-align: center;
  color: #6c757d;
}
.steps li.active {
  background: #c68d38;
  color: #fff;
}
.ls-3 {
  letter-spacing: 3px;
}
</style>
<script>
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
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
    ...mapState(cartStore, ['getCartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeFromCart', 'removeAllCart', 'setCartQty']),
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
    createOrder() {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order }).then((res) => {
        console.log(res)
      })
    }
  },
  created() {}
}
</script>
