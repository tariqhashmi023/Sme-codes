
let name = String(prompt("Enter your Name"));
         document.write( "Name :"+" "+name +"<br><br>");
        let roll = String(prompt("Enter your Roll Number"));
         document.write( "Roll Number :"+" "+roll +"<br><br>");
        let sub =  Number(prompt("Enter your Hindi Subject Marks"));
        
        let sub1 = Number(prompt("Enter your English Subject Marks"));
         
        let sub2 = Number(prompt("Enter your Math Subject Marks"));
         
        let sub3 = Number(prompt("Enter your Science Subject Marks"));
         
        let sub4 = Number(prompt("Enter your Social Science Subject Marks"));

         document.write( "Hindi  :"+" "+sub+"<br><br>"+ "English :"+" "+sub1+"<br><br>"+ "Maths :"+" "+sub2+"<br><br>"+"Science :"+" "+sub3+"<br><br>"+ "Social Science :"+" "+sub4+"<br><br>");
        let total = sub + sub1 + sub2 + sub3 + sub4 ;
         document.write( "Total marks :" +" "+total +"<br><br>");

         mul = total/500*100;
         document.write("Percentage :" +" "+ mul.toFixed(1)+"%"+"<br><br>")

         if(mul > 80 && mul < 100){
            document.write("Grade : A ")
         }
         else if(mul > 60 && mul < 80){
            document.write("Grade B")
         }
         else if(mul > 40 && mul < 60){
            document.write("Grade C")
         }
         else{
            document.write("Fail")
         }