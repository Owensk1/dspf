<template>
  <div id="user_center">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user_center',
  data () {
    return {
      msg: '用户中心'
    }
  }
}
</script>