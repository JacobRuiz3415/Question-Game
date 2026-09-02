alert('Hello world');
console.log('Hello world');

if (jQuery){
    var checkAnswers = function(){
        var answerString = "";
        var answers = $(":checked");
        answers.each(function(i){
            answerString = answerString + answers[i].value;
        });
        $(":checked").each(function(i){
            var answerString = answerString + answers[i].value;
        });
        checkIfCorrect(answerString);
    }

    var checkIfCorrect = function(theString){
        if(parseInt(theString, 16) === 81112466973){
            $("body").addClass("correct");
            $("hi").text("You Win!");
            $("canvas").show();
        }
    }

    $("#question1").show();
}