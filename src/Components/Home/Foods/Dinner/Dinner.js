import React from 'react';
import useAPI from '../../../../Hooks/useAPI';

const Dinner = () => {
    const foods = useAPI();
    return (
        <div className='container grid grid-cols-3 gap-4'>
            {foods.map(food=>food.category==='dinner'?<DinnerCard food={food}/>:'')}
        </div>
    );
};


const DinnerCard = (props) =>
{
    const { strMeal, strMealDesc, price, strMealThumb } = props.food;
    return (
        <div className='p-6 rounded shadow-lg'>
            <img className='m-auto w-10/12' src={strMealThumb} alt="MealThumb" />
            <h3 className='font-bold text-3xl'>{strMeal}</h3>
            <p>{strMealDesc}</p>
            <h4 className='py-3 text-3xl'>${price}</h4>
        </div>
    )
}
export default Dinner;