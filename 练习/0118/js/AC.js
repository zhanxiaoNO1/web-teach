angular.module("app.service", [])
		.service("sss",function(ssd,ssc,ssg,ssh){
			ssd.fun()
			ssh.fun()
			this.aa=222
			this.cc=dd+2
			this.ee=ssc+2
			this.ff=ssg+2				
			console.log(this.aa)
			console.log(this.cc)
			console.log(this.ee)
			console.log(this.ff)
			console.log(gg)
				this.a=[
				{"aa": "bb"
				},
				{
					"aa": "bbb"
				},
				{
					"aa": "bbbb"
				}
			]
			
			return
		})
		.value("ssc",3)
		.constant("ssg",4)
		.factory("ssd",function(){
			return{fun:function(){
				dd=2		
				console.log("bb")
			}}		
		})	
		.config(function($provide) {
			$provide.provider("ssh", function() {
				this.$get = function(ssc) {
					return {
						fun: function() {
							gg = ssc+10
						}
					}
				}
			})
		})