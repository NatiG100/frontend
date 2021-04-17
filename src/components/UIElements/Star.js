import React, {useState, useEffect} from 'react';

//Image imports
import onStar from '../starSVG/selected.svg';
import offStar from '../starSVG/notSelected.svg';

//css imports
import './star.css';


const Star = props => {
    const [selected, setSelected] = useState(false);

    useEffect(()=>{
        if(props.selectedIndex < props.index){
            setSelected(false);
        }else{
            setSelected(true);
        }
    },[props.selectedIndex,props.index])
    const clickHandler = () => {
        props.setSelectedIndex(props.index);
    };
    return (
        <React.Fragment>
            {
                selected && 
                <img 
                    className="star"
                    width="20" 
                    height="20" 
                    src={onStar} 
                    alt="#" 
                    onClick={clickHandler}/
                >
            }
            {
                !selected && 
                <img
                className="star"
                width="20" 
                height="20" 
                src={offStar} 
                alt="*" 
                onClick={clickHandler}
                />
            }
        </React.Fragment>
    );
};
export default Star;