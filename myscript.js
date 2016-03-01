
		$(document).ready(function(){
		    $("#btnGet").click(function(){
		    	 // $.get("http://localhost:9000/student/1", function(data, status){
        //     alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
		        var tempId=$('#uniqueID').val();
		        //alert(tempId);
		         $('#tbl').show();
		         $.get("http://localhost:9000/student/1", function(data, status){
		         if(tempId==data.id)
		         {
		            document.getElementById("uID").innerHTML=data.id;
		            document.getElementById("uname").innerHTML=data.name;
		             document.getElementById("uemail").innerHTML=data.email;
		          //  alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
		         }
		            
		       });
		    });
		});

