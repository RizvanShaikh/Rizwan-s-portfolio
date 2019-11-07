

var harley = { 

	name:"street750",
	color:"black",

	budgetForMe: function () {
		return( "you need to lower your badget",
               console.log(this.name)
			    )
                           	    },

	shoutOuts : [
     { kevin : "kevin has a cool bike"},
      { same : "same has a superb bike"}

	]

};
console.log("you need to lower your ");
console.log( harley);

harley.budgetForMe(8000);
document.getElementById("test").innerHTML = harley.budgetForMe();