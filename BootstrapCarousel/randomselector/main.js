//圖片可先前處理，統一像素、大小等，增加載入速度，減少資源浪費
var images = [
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/398324/cbb643d4814055da.jpg",
    "https://img.ltn.com.tw/Upload/food/page/2019/03/02/190302-8655-000-pGbQL.png",
    "randomselector/nood.jpg",
    "randomselector/粥.png"
];
$(function () {
    //確認能夠知道使用者按了按鈕
    //$("input")=>document.getElementsByTagname("input")[0]
    //on => addEventListener
    $("input").on("click", function () {
        // alert("Hi");
        var numberOflistItem = $("#choices li").length;
        //0~1*3 => 0~3(2.9999x) => floor => 0,1,2
        var randomChildNumber = Math.floor(Math.random() * numberOflistItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", images[randomChildNumber]);

    });
});
