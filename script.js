   
function random(length) {
   
   
    //var type = confirm("Upper case?")
    var length = prompt("Length of password? (must be between 8 and 128 characters)")
    var result = ""
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'*+,-./:;<=>?@[\]^_`~1234567890"
    var lower = "abcdefghijklmnopqrstuvwxyz!#$%&'*+,-./:;<=>?@[\]^_`~1234567890"
    var upperLength = upper.length
     
    
   for ( var i = 0; i < length; i++)  {
   result +=  upper.charAt(Math.floor(Math.random()* upperLength));
      }
       //return result;

    document.getElementById("display").value = result;
    
}
    //console.log(random(1))

//alert("Your password is " + random(length))




function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("copied!");

}