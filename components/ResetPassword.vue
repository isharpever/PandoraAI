<template>
    <div>
      <h1>Reset Password</h1>
      <form>
        <input type="email" v-model="email" placeholder="Email address">
        <button @click.prevent="resetPassword">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      }
    },
    methods: {
      resetPassword() {
        const { $keycloak } = this.$app
        $keycloak.resetPassword({
          email: this.email
        })
          .then(() => {
            console.log('Password reset email sent')
          })
          .catch((error) => {
            console.log('Error resetting password', error)
          })
      }
    }
  }
  </script>