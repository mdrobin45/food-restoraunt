import React, { useState } from 'react';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import './Food.css'


const Foods = () =>
{
    const [buttonToggle, setButtonToggle] = useState(0);



    // Button Toggle
    const toggleButton = (index) =>
    {
        setButtonToggle(index);
    }


    return (
        <div className='text-center py-10 text-lg'>
            <button onClick={()=>toggleButton(1)} className={buttonToggle === 1 ? 'activeTab px-3' : buttonToggle === 0 ? 'activeTab px-3' : 'px-3'}>Breakfast</button>
            <button onClick={()=>toggleButton(2)} className={buttonToggle === 2 ? 'activeTab px-3' : 'px-3'}>Lunch</button>
            <button onClick={()=>toggleButton(3)} className={buttonToggle === 3 ? 'activeTab px-3' : 'px-3'}>Dinner</button>
            <div className='pt-16'>
                {
                buttonToggle === 1 ? <Breakfast/> : buttonToggle === 2 ? <Lunch/>: buttonToggle === 3 ? <Dinner/>:<Breakfast/>
                }
            </div>
        </div>
    );
};

export default Foods;