import React from "react";

const HelloWorld = () =>{
    return <div>
         <h1 style={{textAlign: 'center',textDecorationLine: 'underline'}}
 >Emotion Detection Music Player</h1>

 <p style={{textAlign: 'center', color: 'powderblue',padding:'100px',fontSize: '20px'}}> A music recommendation software which captures the  facial image of the end user, which is captured and stored temporarily, with the camera attached or built into the hardware. Once the image has been taken, it is first converted to a string and sent from the webcam to the server.It is then received and the Haar Cascade frontal face algorithm identifies the face. The captured frame of the region of image containing the face is resized to 48x48 and is passed as input to the Convolutional Neural Network (ConvNet/CNN) and then the network outputs a list of softmax scores for the seven classes of emotions which uses a key-value pair to save the emotions. The emotion with maximum score is computed in the function using the pre-trained model and it returns an integer that defines the emotion. This integer represents the index of the song to be played from the playlist. </p>
 </div>
};
export default HelloWorld;