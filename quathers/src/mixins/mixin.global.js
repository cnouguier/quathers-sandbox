let globalMixin = {
  methods: {
    navigateTo (location) {
      this.$router.push('{ path:' + location + '}')
    }
  }
}

export default globalMixin
