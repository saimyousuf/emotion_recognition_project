import {useState,useRef,useEffect} from 'react';
import Player from './Components/Player';
import Team from './Components/Team';
import {Route,Routes} from "react-router-dom";
import HelloWorld from "./Components/HelloWorld";
import ContactUS from "./Components/ContactUS";
import Error from "./Components/Error";
import Navi from './Components/Navi';
import Emotion_Detection_Player from "./Emotion_Detection_Player";



function App() {
  return(

    <div  > 

        <Navi/>
        <Routes>
            <Route exact path="/" element={<HelloWorld/>}   />
            <Route  exact path="/Team" element={<Team />}    />
            <Route exact path="/Emotion_Detection_Player" element={<Emotion_Detection_Player/>} />
            <Route  exact path="/ContactUS" element={<ContactUS />}    />
            <Route  path='*' element={<Error />} />
        </Routes>


    </div>);
}
export default App;