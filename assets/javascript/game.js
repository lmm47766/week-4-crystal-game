


var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
var score = 0;
var wins=0;
var losses=0;
var newImage;
var randomArray=ran12();
var r;
var imageOptions = ["assets/images/orange.gif","assets/images/green.gif",
  					   "assets/images/yellow.gif","assets/images/pink.gif"];


//***************** List of functions  ***********************//

//Display the stats
function display() {

	$("#random").html(targetNumber);
	$("#score").html(score);
	$("#wins").html(wins);
	$("#losses").html(losses);
	// $("#result").html("&nbsp;");

};

//Resets the values of the images
function resetImgValues() {
	var newArray=ran12();
	$("#image1").attr("data-imageValue", newArray[0] );
	$("#image2").attr("data-imageValue", newArray[1] );
	$("#image3").attr("data-imageValue", newArray[2] );
	$("#image4").attr("data-imageValue", newArray[3] );

};



//Function to create a a list of random numbers from 1-12
function ran12(){
    var max = 4;
    var random = [];
    for(var i = 0;i<max ; i++) {
        var temp = Math.floor(Math.random() * (12-1)) + 1;

        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else {
         	i--;
        }
    }
    return random;
};




//*****************  End of list of functions  ***********************//


   //Creating new images unde the image Div
   for (var i = 0; i < imageOptions.length; i++) {
    newImage = $("<img>");
    newImage.addClass("gemImage");
    newImage.attr("src", imageOptions[i]);
    newImage.attr("id", ("image" + (i+1) ));
    newImage.attr("data-imageValue", randomArray[i] );
    $("#images").append(newImage);

  };


   display();

  $(".gemImage").on("click", function() {

  	$("#result").html("&nbsp;");
    var imageValue = ($(this).attr("data-imageValue"));
    imageValue = parseInt(imageValue);
    score += imageValue;
     display();

    //Checking the score
    if (score === targetNumber) {
		wins++;	
		$("#result").html("YOU WIN!!");
		score=0;
		targetNumber = Math.floor(Math.random() * (120-19)) + 19;
		resetImgValues();
		display();
		
    }

    else if (score >= targetNumber) {
    	losses++;
    	$("#result").html("YOU LOSE!");
		score=0;
		targetNumber = Math.floor(Math.random() * (120-19)) + 19;
		display();
		resetImgValues();
		console.log(score);		
    }



  });


  
