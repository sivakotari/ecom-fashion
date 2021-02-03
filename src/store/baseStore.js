export default {
  state: {
    banner: {
      text: 'Invite friends to Big Fashion Festival & get up to $150 MynCash for every person who visits',
      action_text: 'Invite Now'
    },
    currency: {
      name: 'USD',
      symbol: '$'
    }
  },
  actions: {
  },
  mutations: {
  },
  getters: {
    banner: state => state.banner,
    currency: state => state.currency
  }
}