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
 
        function sidebar1_onMouseDown() {
          var sidebar1 = document.getElementById("sidebar1");
          sidebar1.className = "myStyle";
          sidebar1.innerHTML = "<h2>Be yourself</h2><p>Hello World.</p>";

    }     
       
        function sidebar1_onMouseUp() {
          var sidebar1 = document.getElementById("sidebar1");
          sidebar1.className = "defaultStyle";
          sidebar1.innerHTML = "<h2>Be a news reporter</h2><p>If you see news happening - send us a Text.</p>";
        } 

     
       