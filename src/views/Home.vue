<template>
</template>

<script>
export default {
  name: 'Home',
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/users/login')
    } else {
      this.$router.push('/cameras')
    }
  },
};
</script>
