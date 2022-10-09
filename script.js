const video = document.querySelector("#video");
const canvas = document.querySelector("#canvas");
const capture =  document.querySelector(".capture");

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
   navigator.mediaDevices.getUserMedia({
    video:true
   }).then(function(stream){
    video.srcObject = stream;
    video.play();
   });
}

const context = canvas.getContext('2d');

capture.addEventListener("click", function(){
    context.drawImage(video,0,0,640,480);
});
