$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;
    //24hr/day,60m/hr,60s/min,1000毫秒/s
    let millisecsPerDay = 24*60*60*1000
    
 
    for(var x=0;x<topicCount;x++){
        let monday = (new Date(starDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString();
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${monday.split("/")[1]}/${monday.split("/")[2]}</td>`+
            `<td>${topic[x]}</td>`+
            "<tr>"
        );
    }
});