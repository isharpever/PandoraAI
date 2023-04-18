<template>
    <div>
      <h1>Change Password</h1>
      <form>
        <input type="password" v-model="oldPassword" placeholder="Old Password">
        <input type="password" v-model="newPassword" placeholder="New Password">
        <button @click.prevent="changePassword">Change Password</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: ''
      }
    },
    methods: {
      changePassword() {
        const { $keycloak } = this.$app
        $keycloak.changePassword({
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        })
          .then(() => {
            console.log('Password changed successfully')
          })
          .catch((error) => {
            console.log('Error changing password', error)
          })
      }
    }
  }
  </script>