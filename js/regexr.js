

//please visit to regular expression website www.regexr.com
var str = "APPLE apple Apple AppLe aPPle ApplE aPPLe";
var apple = str.replace(/([A-Z])\w+/gi,"apple");

document.getElementById("test").innerHTML= apple;