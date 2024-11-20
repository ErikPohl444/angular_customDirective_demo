var app = angular.module("customDirective", []);

app.directive("ngCustomTest", function() {
	return {
  	template : "<strong>hello</strong>"
  }
});
