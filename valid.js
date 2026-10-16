function validation(){
            let name = document.forms["signupForm"]["sname"].value;
            let rollNo = document.forms["signupForm"]["sroll"].value;
            let email = document.forms["signupForm"]["semail"].value;
            let pass = document.forms["signupForm"]["spass"].value;
              
            if(name == "" && rollNo == "") {
                alert("Name and Roll No. must be filled out ")
                return false;
              }
              
              else if( name.length < 3){
                alert("Please fill your complete name")
                return false;
              }
               else if( spass != confirm){
                alert("Password do not match")
                return false;
              } else {
                alert("Sign Up successful!")
                return true;
              }
        }
        function modify(){
             const namef =document.getElementById("name");
             namef.value=namef.value.toUpperCase();
        }
    