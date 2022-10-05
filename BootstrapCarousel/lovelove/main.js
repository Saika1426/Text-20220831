$(function () {
    //儲存目前作答到第幾題
    var currentQuiz = null;
    //當按下按鈕後要做的事
    $("#startButton").on("click",function(){
        //如果還沒開始作答，從這裡開始
        if(currentQuiz == null){
            //alert("yo");按鈕測試
            currentQuiz = 0;
            $("#questions").text(questions[0].question);

             $("#options").empty();
            questions[0].answers.forEach(
                function(element,index,array){
                    $("#options").append(`<input name = 'options' type='radio' value = '${index}'<label>${element[0]}</label><br></br>`);
                }
            );
            //將按鈕上的文字換成next
            $("#startButton").attr("value","Next");
        }else{
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    //抓出使用者選了哪一個
                    //最後一題 ->結果,其他 ->跳到對應的下一提
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        //產生最後結果
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#questions").text(finalAnswers[finalResult][0]);
                        $("#options").empty();//清空上一次的回答
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr("value","重新開始");
                    }else{
                        //跳下一題(PS.原題目編碼從1開始，but JS編碼從0開始，所以要-1)
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#questions").text(questions[currentQuiz].question);
                        console.log("question:"+questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(
                            function(element, index, array){
                                $("#options").append(
                                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`
                                 );
                            }
                        )

                    }
                    return false;//跳離迴圈
                }
            })
        }
    })
});