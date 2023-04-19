Webcam.set //serve paraas propriedades da webcam//
({
    width:350,
    height:300,
    imageFormat : 'png',
    pngQuality:90
});

camera = document.getElementById("camera");


Webcam.attach('#camera');

function takeSnapshot()//função pre definida do js//
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]/model.json',modelLoaded);

function modelLoaded() 
{
   console.log('Model Loaded!');
}

function speak(){
   var synth = window.speechSyntesis;
   speakData1 = "A primeira previsão é " + prediction1;
   speakData2 = "A segunda previsão é " + prediction2;
   var utterThis = new SpeechSyntesisUtterrance(speakData1 + speakData2);
   synth.speak(utterThis);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultHandName").innerHTML = reesults[0].label;
        document.getElementById("resultHandName2").innerHTML = reesults[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(gesture == "tranquilo") 
        {
          document.getElementById("updateHand").innerHTML = "&#128076;";
        }
        if(gesture == "legal")
        {
            document.getElementById("updateHand").innerHTML = "&#128077;";
        }
        if(gesture == "vitória")
        {
            document.getElementById("updateHand").innerHTML = "&#9996;";
        }
       
    }
}
function check()
{
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}