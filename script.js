   
   
   //var type = confirm("Upper case?")
    var length = prompt("Length of password? (must be between 8 and 128 characters)")
    var result = ""
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'*+,-./:;<=>?@[\]^_`~1234567890"
    var lower = "abcdefghijklmnopqrstuvwxyz!#$%&'*+,-./:;<=>?@[\]^_`~1234567890"
    var upperLength = upper.length
     
    function random(length) {
      for ( var i = 0; i < length; i++)  {
   result +=  upper.charAt(Math.floor(Math.random()* upperLength));
      }
       return result;
 }
    //console.log(random(1))

alert("Your password is " + random(length))