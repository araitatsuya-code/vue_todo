Vue.filter('toUSD',function(jpy){
	return jpy/100
})

Vue.filter('numberFormat',function(value){
	return value.toLocaleString()
})


var app = new Vue({
	el: '#app',
  data: {
		JPYprice: 298000
  }
  /* filters:{
  
  numberFormat: function(value){
    return value.toLocaleString()
  }
  } */
})