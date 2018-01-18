angular.module("myapp1", ["myapp2", "myapp"])
.factory("factory", function() {
		return {
			"a": "2"
		}
	})
	.service("service", function(value) {
		this.c = value
	})
	.config(function($provide) {
		$provide.provider("provider", function(constant) {
			this.$get = function() {
				return {
					fun: function() {
						b = constant
					}
				}
			}
		})
	})
	.value("value", 1)
	.constant("constant", 3)