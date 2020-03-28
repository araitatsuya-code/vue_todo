
var app = new Vue({
	el: '#app',
  computed: {
  	computedNumber: function(){
    	return Math.random()
    }
  },
  methods: {
  	methodsNumber: function(){
    	return Math.random()
    }
  }
})