

//in object function can be given 
var harley = { firstName: "street", 
               lastName:"250", 
               cc:"750",
               weight:"320", 
               color:"black", 
               fullname: function () {
               	    return this.firstName + "-" + this.lastName

               }

           }
document.getElementById("test").innerHTML= harley.fullname();

