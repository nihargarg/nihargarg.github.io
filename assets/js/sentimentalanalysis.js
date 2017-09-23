$(function () {
	
	$("#AnaylyzeButton").click(function(){
        var subscriptionKey = "a46c7301d6344c24b1b3b7c3659a38cf";
        var textToAnalyze = $("#TextToAnalyze").val();

        var webSvcUrl = "https://eastus2.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment";


        var outputDiv = $("#OutputDiv");
        outputDiv.text("Thinking...");

        $.ajax({
            type: "POST",
            url: webSvcUrl,
            headers: { "Ocp-Apim-Subscription-Key": subscriptionKey },
            contentType: "application/json",
            data: '{"documents": [ { "language": "en", "id": "text01",  "text": "'+ textToAnalyze + '" }]}'
        }).done(function (data) {
			if (data.errors.length > 0) {
                outputDiv.html("Error: " + data.errors[0]);
			}
            else if (data.documents.length > 0) {
				var score = data.documents[0].score;
				if (score > 0.5){
					outputText = "That is a Positive thing to say! "
						+ "<br>"
						+ "Score=" 
						+ score.toFixed(2);
					$("#PositiveImage").css("display", "inline");
					$("#NegativeImage").css("display", "none");
				}
				else{
					outputText = "That is a Negative thing to say! "
						+ "<br>"
						+ "Score=" 
						+ score.toFixed(2);
					$("#PositiveImage").css("display", "none");
					$("#NegativeImage").css("display", "inline");
				}
                outputDiv.html(outputText);
            }
            else {
                outputDiv.text("No text to analyze.");
				$("#PositiveImage").css("display", "none");
				$("#NegativeImage").css("display", "none");
            }

        }).fail(function (err) {
            $("#OutputDiv").text("ERROR! " + err.responseText);
			$("#PositiveImage").css("display", "none");
			$("#NegativeImage").css("display", "none");
        });
		
   });


});

