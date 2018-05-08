<template>
  <div v-show="stepShow">step1
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
  
</template>
<script>
export default {
  props: {
    stepShow: { type: Boolean },
    next: {type: Function, default: () => []}
  },

  data () {
    return {
      stepShow: true
    }
  },
  computed: {
  },
  created () {
    this.$set(this.stepShow, true)
  },
  methods: {
    next () {
      // alert()
      this.$emit('update:stepShow', false)
    }
  }
}
</script>

