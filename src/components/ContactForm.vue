<template>
  <Form v-slot="{ errors, validate }" @submit="onSubmit" id="contact" class="needs-validation" novalidate autocomplete="on">
    <div class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">姓名 *</label>
        <Field id="name" name="姓名" type="text" rules="required" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" v-model="user.name" />
        <ErrorMessage name="姓名" class="invalid-feedback" />
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label">電話 *</label>
        <Field id="phone" name="電話" type="text" :rules="isphone" class="form-control" :class="{ 'is-invalid': errors['電話'] }" v-model="user.phone" />
        <ErrorMessage name="電話" class="invalid-feedback" />
      </div>
      <div class="mb-3 col-12">
        <label for="email" class="form-label">信箱 *</label>
        <Field id="email" name="信箱" type="email" rules="email|required" class="form-control" :class="{ 'is-invalid': errors['信箱'] }" placeholder="name@example.com" v-model="user.email" />
        <ErrorMessage name="信箱" class="invalid-feedback" />
      </div>
      <div class="mb-3 col-12">
        <label for="message" class="form-label">留些訊息給我吧 *</label>
        <Field as="textarea" id="message" name="留言" type="text" rules="required" class="form-control" :class="{ 'is-invalid': errors['留言'] }" rows="3" v-model="user.message" />
        <ErrorMessage name="留言" class="invalid-feedback" />
      </div>
      <div class="col-12 text-start">
        <button @click="validate" class="btn btn-primary text-white w-50" type="submit" id="btn-form">送出表單</button>
      </div>
    </div>
  </Form>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit(values, { resetForm }) {
      console.log(JSON.stringify(values, null, 2))
      resetForm()
      const successModal = new Modal('#successModal')
      successModal.show()
    },
    isphone(value) {
      if (!value) {
        return '此電話欄位為必填'
      }
      const phoneRegex = /^(09)[0-9]{8}$/
      return phoneRegex.test(value) ? true : '請輸入正確的手機號碼'
    }
  }
}
</script>
