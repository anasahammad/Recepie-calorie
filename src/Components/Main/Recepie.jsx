
import { GoClock } from "react-icons/go";
import cook from '/images/cooking.png';
import PropTypes from 'prop-types';
const Recepie = ({recepie , handleWantCook}) => {

    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recepie;

    return (
        <div>
        


        <div className="card  bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
<img src={recipe_image} alt="Shoes" className="rounded-xl" />
</figure>
<div className="card-body  ">
<h2 className="text-[#282828] lexend text-[20px] font-semibold">{recipe_name}</h2>
<p className="text-[#878787] fira-sans ">{short_description}</p>
<div className="divider"></div>

<h2 className="text-[#282828] lexend text-[18px] font-semibold">Ingredients: {ingredients.length}</h2>
<ul className="list-disc">
   

    {
        ingredients.map(ingredient => <li key={recepie.recipe_id} className="text-[#878787] fira-sans">{ingredient}</li>)
    }
    
</ul>

<div className="divider"></div>

<div className="flex items-center gap-4">
    <div className="flex items-center gap-2 ">
<p><GoClock></GoClock></p>
        <p>{preparing_time} minutes</p>
    </div>

    <div className="flex items-center gap-2">
        <img src={cook} alt="" />
        <p>{calories}</p>
    </div>
</div>
<div className="card-actions">
  <button onClick={()=>handleWantCook(recepie)} className="btn bg-[#73fec4] outline-none rounded-[50px]">Want to Cook</button>
</div>
</div>
</div>
       

        
        </div>
    );
};
Recepie.propTypes = {
    recepie: PropTypes.array,
    handleWantCook: PropTypes.func
}
export default Recepie;