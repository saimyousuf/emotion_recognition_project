import React,{useState, useEffect}from 'react';
import Playerdetails from './Playerdetails';
import Playercontrol from './Playercontrol';


function Player(props) {
    
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(()=>{
        const audioEl = document.getElementsByClassName("audio-element")[0];

        {console.log(audioEl)}
        audioEl.src=props.songs[props.currentSongIndex].src;
        if(isPlaying){
            audioEl.play();
        } else{
            audioEl.pause();
        }
    },[isPlaying]);

    // function to skip a song    
    const SkipSong =(forwards = true) => {
        //forward or true
        if(forwards) {
            props.setCurrentSongIndex(()=>{
                let temp =props.currentSongIndex;
                temp++;

                if(temp > props.songs.length -1){
                    temp = 0;
                }
                
                return temp;
            }); 
    // backward or false
        } else{
            props.setCurrentSongIndex(()=>{
                let temp =props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length - 1;
                }
                
                return temp;
            }); 

        }
    }
//-----------------------------------------------------------------------------
console.log("current song index "+props.currentSongIndex)

    return (
    <div className="c-player">
        <audio className="audio-element">
            <source type="audio/mpeg"/>
        </audio>
        <h4> Audio Player </h4>
        
        <Playerdetails 
           song={props.songs[props.currentSongIndex]}
           setCurrentSongIndex={props.setCurrentSongIndex}
           setIsPlaying={setIsPlaying}
        />

        <Playercontrol
           className="player-controls-main"
           isPlaying={isPlaying} 
           setIsPlaying= {setIsPlaying} 
           SkipSong={SkipSong} 
         />

    </div>
    )
}
export default Player;


