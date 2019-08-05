import util from '../util.js'
import * as filters from'./filters'
let filter = {
  install: function(Vue) {
    util.each(filters, function(value, key) {
        Vue.filter(key, value)
    })
    Vue.mixin({});
  }
}

export default filter;