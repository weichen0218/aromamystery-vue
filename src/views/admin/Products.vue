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
            <!-- <button @click.prevent="modifyProduct" class="btn btn-outline-success btn-sm">修改</button> -->
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
      dataOne: {
        title: '初階課程',
        category: '初階',
        price: 999,
        origin_price: 1999,
        unit: '堂',
        content: '了解精油基礎知識、療效和用途、如何安全使用精油守則、學習製作基本的精油產品',
        description:
          '了解精油的起源和製備方法，包括蒸餾和冷壓提取等技術。探索常見精油的世界，包括薰衣草、檸檬、薄荷等。深入了解每種精油的特性、香氣和應用。學習如何正確稀釋和使用精油，以確保安全性。學習製作基本的精油產品，包括芳香劑、按摩油等。',
        is_enabled: 1,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/aromatherapy-course.appspot.com/o/plan01.jpg?alt=media&token=a7ab42dd-3821-4488-ac7d-1eb629afde8b'
        // imagesUrl: ['圖片網址一', '圖片網址二', '圖片網址三', '圖片網址四', '圖片網址五']
      },
      dataTwo: {
        title: '中階課程',
        category: '中階',
        price: 2999,
        origin_price: 3999,
        unit: '堂',
        content: '了解精油化學成分與影響、製作複雜複方精油、掌握香薰按摩的技巧、探討精油對情緒的影響、使用工具提高效果',
        description:
          '深入研究精油的化學成分，理解各成分對身體和心理的影響。學習製作複雜的複方精油，並掌握香薰按摩的技巧。探討精油對情緒的影響，以及如何使用它們來提升心理健康。學習使用各種工具，例如擴香器、輔助油和基底油等，來提高精油的效果和吸收。',
        is_enabled: 1,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/aromatherapy-course.appspot.com/o/plan02.jpg?alt=media&token=a1d6adcf-7718-4146-988b-a62945e590bc'
        // imagesUrl: ['圖片網址一', '圖片網址二', '圖片網址三', '圖片網址四', '圖片網址五']
      },
      dataThree: {
        title: '進階課程',
        category: '進階',
        price: 4999,
        origin_price: 5999,
        unit: '堂',
        content: '症狀管理與應用、心靈療法和心理諮詢中的精油應用、主持精油工作坊技巧、精油事業發展',
        description:
          '研究不同症狀（例如頭痛、消化不良、皮膚狀態等）的精油應用，以及如何有效地應對這些常見健康問題。探索精油在心靈療法和心理諮詢中的應用，學習如何在治療過程中整合精油以促進自我探索和療癒。學習如何主持精油工作坊，包括如何有效地傳遞精油知識、製作實習和解答學員的問題。了解精油行業的最新趨勢和發展，學習如何建立自己的精油事業，包括行銷、產品開發和客戶關係管理。',
        is_enabled: 1,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/aromatherapy-course.appspot.com/o/plan03.jpg?alt=media&token=6d1bf4df-8e08-4108-8dd9-840566bc6538'
        // imagesUrl: ['圖片網址一', '圖片網址二', '圖片網址三', '圖片網址四', '圖片網址五']
      }
    }
  },
  methods: {
    deleteItem() {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/-NhVibNCoNqdEgPs1-KO`
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
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product`
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
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/products`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        } else {
          alert(res.data.message)
        }
      })
    },

    modifyProduct() {
      const productId = ['-NhVkaOelZZV1yt0ypR0', '-NhVkHdbFm8rrLS6YSJI', '-NhVjdz-kTxfCL1C0Sx9']
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/${productId[2]}`
      let httpMethod = 'put'
      this.$http[httpMethod](api, { data: this.dataThree }).then((res) => {
        if (res.data.success) {
          console.log('modify success')
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
