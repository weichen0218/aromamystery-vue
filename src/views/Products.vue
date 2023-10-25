<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- <button @click.prevent="addItem" type="button">按我新增資料</button>
  <button @click.prevent="deleteItem" type="button">按我刪除資料</button> -->
</template>
<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
      data: {
        title: '高階課程',
        category: '高階',
        origin_price: 6999,
        price: 6999,
        unit: '堂',
        description: '芳療心理學、穴位按摩指導、一對一芳療諮詢、十大生理系統專論',
        content: '芳療心理學、穴位按摩指導、一對一芳療諮詢、十大生理系統專論',
        is_enabled: 1,
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/aromatherapy-course.appspot.com/o/plan03.jpg?alt=media&token=1aa64360-6d6c-4ec2-bbe5-420b1e4c75be&_gl=1*1nfka51*_ga*MjczMTk2Njc5LjE2ODk4NTQxMjk.*_ga_CW55HF8NVT*MTY5ODEzNTAwMy40OS4xLjE2OTgxMzU0MDkuNjAuMC4w'
        // imagesUrl: ['圖片網址一', '圖片網址二', '圖片網址三', '圖片網址四', '圖片網址五']
      }
    }
  },
  methods: {
    deleteItem() {
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product/-NhVibNCoNqdEgPs1-KO`
      let httpMethod = 'delete'
      this.$http[httpMethod](api, { data: this.product }).then((res) => {
        if (res.data.success) {
          console.log('delete success')
        } else {
          alert(res.data.message)
        }
      })
    },
    addItem() {
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      this.$http[httpMethod](api, { data: this.data }).then((res) => {
        if (res.data.success) {
          console.log('add success')
        } else {
          alert(res.data.message)
        }
      })
    },
    getProducts() {
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        } else {
          alert(res.data.message)
        }
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
