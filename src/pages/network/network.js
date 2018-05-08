import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'internet',
  data () {
    return {
      msg: '网络'
    }
  },

  created: function () {
    this.getNetworks()
  },

  computed: {
    ...mapGetters(['networks'])
  },

  methods: {
    ...mapActions([
      'getNetworks'
    ])
  }
}
