var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "大概是"
];
var starDate = new Date();

//設定好活動第一次的日期
function setMonthAndDay(startMonth, startDay) {
    //Js的月份是0~11，所以這邊-1
    starDate.setMonth(startMonth - 1, startDay);
    starDate.setHours(0);
    starDate.setMinutes(0);
    starDate.setSeconds(0);
}
//設定第一次活動日期為2月21日
setMonthAndDay(2, 21);