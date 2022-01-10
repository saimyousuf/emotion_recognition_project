import {useState,useRef,useCallback,useEffect} from 'react';
import Webcam from "react-webcam";
const axios = require('axios');

function Playerdetails(props) {

  const [emotion,setEmotion]=useState(-1);

  const webcamRef = useRef(null);

  useEffect(() => {
    console.log("the emotion is: "+emotion)
  }, [emotion])

  async function getEmotion(img) {
    props.setIsPlaying(false)
    try {
      const response = await axios.post('https://emotion-detect-api.herokuapp.com/predict', {
        data: img
      });
      props.setCurrentSongIndex(response.data)
      props.setIsPlaying(true)
    } catch (error) {
      console.error(error);
    }
  }
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const img=imageSrc.substring(23)
      // console.log(img);
      getEmotion(img);
    },
    [webcamRef]
  );

    return (
        <div className="c-player--details">
         <div className="details-img">
            <Webcam
            className="details-webcam"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
         </div>
         <button onClick={capture}>Capture photo</button>
        </div>
    )
}

export default Playerdetails;
