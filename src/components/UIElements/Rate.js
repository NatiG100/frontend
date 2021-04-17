import React,{useState} from 'react';
import Stars from './Stars';
import verySad from '../rateImojies/vs.svg';
import sad from '../rateImojies/s.svg';
import neutral from '../rateImojies/n.svg';
import happy from '../rateImojies/v.svg';
import veryHappy from '../rateImojies/vh.svg';

import './rate.css';

const Rate = () => {
    const [selectedIndexR, setSelectedIndexR] = useState(2);

    return (
        <div className="rate">
            {
                selectedIndexR === 0 ? 
                    <img 
                        className="imoji"
                        src={verySad} 
                        alt="Very Sad" 
                        height="100" 
                        width="100"
                    />:
                selectedIndexR === 1 ? 
                    <img 
                        className="imoji"
                        src={sad} 
                        alt="Sad" 
                        height="100" 
                        width="100"
                    />:
                selectedIndexR === 2 ? 
                    <img
                        className="imoji" 
                        src={neutral} 
                        alt="Neutral" 
                        height="100" 
                        width="100"
                    />:
                selectedIndexR === 3 ? 
                    <img
                        className="imoji" 
                        src={happy} 
                        alt="Happy" 
                        height="100" 
                        width="100"
                    />:
                    <img
                        className="imoji" 
                        src={veryHappy} 
                        alt="Very Happy" 
                        height="100" 
                        width="100"
                    />
            }
            <Stars setSelectedIndexR={setSelectedIndexR}/>
        </div>
    );
};
export default Rate;