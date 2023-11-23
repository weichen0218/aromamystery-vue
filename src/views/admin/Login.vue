<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row border rounded-5 p-3 bg-white shadow box-area">
      <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box d-none d-md-flex">
        <p class="text-white fs-2">芳香秘境</p>
        <small class="text-white text-wrap text-center" style="width: 17rem">提供專業芳療知識</small>
      </div>

      <div class="col-md-6 px-4 py-5">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>歡迎回來</h2>
            <p>我們很高興您回來</p>
          </div>
          <Form v-slot="{ errors, validate }" @submit="onSubmit" class="needs-validation" novalidate autocomplete="on">
            <div class="mb-3 col-12">
              <Field
                id="email"
                name="email"
                rules="required|email"
                :class="{ 'is-invalid': errors['email'] }"
                v-model="user.username"
                type="text"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Email address"
              />
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>

            <div class="mb-1 col-12">
              <Field
                id="password"
                name="password"
                rules="required"
                :class="{ 'is-invalid': errors['password'] }"
                v-model="user.password"
                type="password"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Password"
              />
              <ErrorMessage name="password" class="invalid-feedback" />
            </div>

            <div class="mb-5 col-12 d-flex justify-content-between">
              <div class="form-check">
                <Field name="remember" :value="true" type="checkbox" class="form-check-input" id="remember" />
                <label for="remember" class="form-check-label"><small>記住我</small></label>
              </div>
              <div class="forgot">
                <small><a href="#">忘記密碼?</a></small>
              </div>
            </div>

            <div class="mb-3 col-12">
              <button @click="validate" class="btn btn-lg btn-primary w-100 fs-6 text-white">登入</button>
            </div>

            <div class="mb-3 col-12">
              <button class="btn btn-lg btn-light w-100 fs-6"><img src="@/assets/image/google.png" style="width: 20px" class="me-2" /><small>Sign In with Google</small></button>
            </div>
          </Form>
          <div class="col-12">
            <small>還沒有帳戶嗎? <a href="#">建立帳戶</a></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.left-box {
  background-image: linear-gradient(to bottom, rgba(151, 118, 68, 0.35), rgba(0, 0, 0, 0.35)), url('src/assets/image/login_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      loginBackground: 'linear-gradient(to bottom, rgba(151,118,68, 0.35), rgba(0,0,0, 0.35)), url("src/assets/image/login_bg.jpg")'
    }
  },
  methods: {
    onSubmit(values, { resetForm }) {
      console.log(JSON.stringify(values, null, 2))
      console.log(this.user)
      this.signIn()
      // resetForm()
    },
    signIn() {
      const api = `${import.meta.env.VITE_APP_API}/admin/signin`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin')
        } else {
          alert(res.data.message)
        }
      })
    }
  },
  created() {}
}
</script>
