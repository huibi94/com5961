document
       function sidebar2_onMouseOver() {
          var sidebar2 = document.getElementById("sidebar2");
          sidebar2.className = "newStyle";
          sidebar2.innerHTML = "<h2>Be yourself</h2><p>Always aim for the best</p>";
    }
        function sidebar2_onMouseOut() {
          var sidebar2 = document.getElementById("sidebar2");
          sidebar2.className = "defaultStyle";
          sidebar2.innerHTML = "<h2>Be yourself</h2><p>See what can be shown here.</p>";

    }    
 
        function sidebar2_onMouseDown() {
          var sidebar2 = document.getElementById("sidebar2");
          sidebar2.className = "myStyle";
          sidebar2.innerHTML = "<h2>Be yourself</h2><p>Hello World.</p>";

    }     
        
        function validateForm() {
           var x = document.forms["myForm"] ["fname"].value;
           document.getElementById("sidebar2").innerHTML = "The value entered is: "+x;
           return false;
}
        
