import React, {useState} from 'react';

import Star from './Star';

import './stars.css';

const Stars = props => {
    const [selectedIndex, setSelectedIndex] = useState(2);
    const selectedIndexSetter = (index) =>{
        console.log(index);
        setSelectedIndex(index);
        props.setSelectedIndexR(index);
    }
    return(
        <div className="stars">
            <Star 
                index={0} 
                selectedIndex= {selectedIndexSetter} 
                setSelectedIndex={selectedIndexSetter}
            />
            <Star 
                index={1} 
                selectedIndex={selectedIndex} 
                setSelectedIndex={selectedIndexSetter}
            />
            <Star 
                index={2} 
                selectedIndex={selectedIndex} 
                setSelectedIndex={selectedIndexSetter}
            />
            <Star 
                index={3} 
                selectedIndex={selectedIndex} 
                setSelectedIndex={selectedIndexSetter}
            />
            <Star 
                index={4} 
                selectedIndex={selectedIndex} 
                setSelectedIndex={selectedIndexSetter}
            />
        </div>
    );
};
export default Stars;