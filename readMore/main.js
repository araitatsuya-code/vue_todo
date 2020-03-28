Vue.filter('readMore',function(text,length,suffix){
	return text.substring(0,length) + suffix
})

var app = new Vue({
	el: '#app',
  data: {
		text: 'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors including Pages and Microsoft Word have since adopted Lorem ipsum as well.'
  }

})