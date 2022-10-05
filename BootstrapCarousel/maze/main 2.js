let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray:遊戲地圖中的每個格子的元素
const gridLength = 200;

function loadImages(sources, callback) {
   var images = {};
   var loadedImages = 0;
   var numImages = 0;
   // get num of sources
   for(var src in sources) {
     numImages++;
   }
   for(var src in sources) {
     images[src] = new Image();
     images[src].onload = function() {
       if(++loadedImages >= numImages) {
         callback(images);
       }
     };
     images[src].src = sources[src];
   }
}
 

$(function(){
  mapArray = [
   [0, 1, 1],
   [0, 0, 0],
   [3, 1, 2]
  ];
  ctx = $("#myCanvas")[0].getContext("2d");

  imgMain = new Image();
  imgMain.src = "images/spriteSheet.png";
  currentImgMain = {
   "x":0,
   "y":0
  };

  imgMain.onload = function(){
      ctx.drawImage(imgMain,0, 0, 80, 130, currentImgMain.x, currentImgMain.y , gridLength,gridLength);
  };

//   imgMountain = new Image();
//   imgMountain.src = "images/material.png";
//   imgEnemy = new Image();
//   imgEnemy.src = "images/Enemy.png";
//   imgMountain.onload = function(){
//    imgEnemy.onload = function(){
//       for(var x in mapArray){
//          for(var y in mapArray[x]){
//             if(mapArray[x][y]==1){
//                //Draw Mountain
//                ctx.drawImage(imgMountain,32, 65, 32, 32, y*gridLength, x*gridLength , gridLength,gridLength);
//             }else if(mapArray[x][y]==3){
//                //Draw Enemy
//                ctx.drawImage(imgEnemy, 7, 40, 104, 135, y*gridLength, x*gridLength , gridLength,gridLength);
//             }
//          }
//       }
//    };
//   };

   var sources = {
      mountain:'images/material.png',
      enemy:'images/Enemy.png'
   };

   loadImages(sources, function(images){
      for(var x in mapArray){
         for(var y in mapArray[x]){
            if(mapArray[x][y]==1){
               //Draw Mountain
               ctx.drawImage(images.mountain,32, 65, 32, 32, y*gridLength, x*gridLength , gridLength,gridLength);
            }else if(mapArray[x][y]==3){
               //Draw Enemy
               ctx.drawImage(images.enemy, 7, 40, 104, 135, y*gridLength, x*gridLength , gridLength,gridLength);
            }
         }
      }
   });
   
});

$(document).on("keydown", function(event){

});