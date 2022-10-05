let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray - 決定地圖中每個格子的元素
//cts html5 Canvas 用


const gridLength = 100;

//網頁載入完成後初始化動作
$(function () {
    mapArray = [
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 3, 0, 0],
        [3, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 3, 1],
        [0, 0, 1, 0, 3, 0],
        [3, 1, 1, 0, 2, 0]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "maze/images/spriteSheet.png";
    currentImgMain = {
        "x": 0,
        "y": 0
    };
    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 90, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    }
    imgMountain = new Image();
    imgMountain.src = "maze/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "maze/images/Enemy.png";
    imgMountain.onload = function () {
        imgEnemy.onload = function () {
            //第一層迴圈[x]:選擇一維陣列[0,1,1]
            //第二層迴圈[y]:尋找陣列裡的物件0,1,2,3
            for (var x in mapArray) {
                for (var y in mapArray[x]) {
                    if (mapArray[x][y] == 1) {
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                    } else if (mapArray[x][y] == 3) {
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
                    }
                }

            }
        }
    }
});

//處理使用者按下按鍵
$(document).on("keydown", function(event){
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
       "x":-1,
       "y":-1
    };
    targetBlock = {
       "x":-1,
       "y":-1
    };
    event.preventDefault();
    console.log(event.code);
    switch(event.code){
       case "ArrowLeft":
          targetImg.x = currentImgMain.x - gridLength;
          targetImg.y = currentImgMain.y;
          cutImagePositionX = 175;
          break;
       case "ArrowUp":
          targetImg.x = currentImgMain.x;
          targetImg.y = currentImgMain.y - gridLength;
          cutImagePositionX = 355;
          break;
       case "ArrowRight":
          targetImg.x = currentImgMain.x + gridLength;
          targetImg.y = currentImgMain.y;
          cutImagePositionX = 540;
          break;
       case "ArrowDown":
          targetImg.x = currentImgMain.x;
          targetImg.y = currentImgMain.y + gridLength;
          cutImagePositionX = 0;
          break;
       default:
          return;
    }
 
    if(targetImg.x<=500 && targetImg.x >=0 &&
       targetImg.y<=500 && targetImg.y >=0
       ){
          //在範圍中
          targetBlock.x = targetImg.y / gridLength;
          targetBlock.y = targetImg.x / gridLength;
    }else{
       //出界(-1->異常標示)
       targetBlock.x = -1;
       targetBlock.y = -1;
    }
 
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
 
    if(targetBlock.x!=-1 && targetBlock.y!=-1){
       switch(mapArray[targetBlock.x][targetBlock.y]){
          case 0:
             $("#talkBox").text("");
             currentImgMain.x = targetImg.x;
             currentImgMain.y = targetImg.y;
             break;
          case 1:
             $("#talkBox").text("有山");
             break;
          case 2:
          $("#talkBox").text("終點");
          currentImgMain.x = targetImg.x;
          currentImgMain.y = targetImg.y;
          break;
          case 3:
          $("#talkBox").text("哈摟");
          break;
       }
    }else{
       $("#talkBox").text("邊界");
    }
 
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y , gridLength,gridLength);
 
 });


