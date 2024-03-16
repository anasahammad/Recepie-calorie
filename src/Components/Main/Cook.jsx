
import 'react-toastify/dist/ReactToastify.css';
const Cook = ({cook, handlePrepare, cooking}) => {
   
   
    return (
        <div>
            

<h2 className="text-[#282828] lexend text-[20px] text-center font-semibold my-4">Want to cook: {cook.length}</h2>
<div className="divider w-1/2 mx-auto"></div>
            <div className="lg:overflow-x-auto ">

                
  <table className="table w-full table-zebra ">
   {/* head */}

   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>

    {
        cook.map((item, index) =><tbody key={item.recipe_id}>
<tr className="overflow-x-auto">
        <th>{index + 1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time} minutes</td>
        <td>{item.calories}</td>
       
        <td><button onClick={()=> handlePrepare(item)} className="btn bg-[#73fec4] outline-none rounded-[50px]">Preparing</button></td>
      </tr>
        </tbody> )
    }
    
      {/* Row -1 */}
     
  </table>


  
</div>

<h2 className="text-[#282828] lexend text-[20px] text-center font-semibold my-4">Currently cooking: {cooking.length}</h2>
<div className="divider w-1/2 mx-auto"></div>
            <div className="lg:overflow-x-auto">
  <table className="table table-zebra">
   {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>

    {
        cooking.map((item, index) => <tbody key={item.recipe_id}>
 <tr>
        <th>{index + 1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time} minutes</td>
        <td>{item.calories}</td>
        
      </tr>
        </tbody>)
    }
   
      {/* Row -1 */}
     
  </table>



     <div  className="flex justify-end items-right gap-3 mr-8 mt-10">
        <div className="">
        <h6 className="text-[#282828cc] font-bold">Total Time = <br /> <span>
    {
        cooking.reduce((prev, item)=> prev + item.preparing_time, 0)
    } </span>   minutes</h6>
        </div>
   
   <div className="">
   <h6 className="text-[#282828cc] font-bold">Total Calories =  <br /> <span>
{
    cooking.reduce((prev, item)=>{
        const caloreis = parseInt(item.calories.split(' ')[0]);
        return prev + caloreis;
    }, 0  ) 
} </span>  caloreis
</h6>
   </div>
   
    </div>

    

  
</div>
           
        </div>
    );
};

export default Cook;