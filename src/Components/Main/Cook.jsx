

const Cook = () => {
    return (
        <div>
            

<h2 className="text-[#282828] lexend text-[20px] text-center font-semibold my-4">Want to cook: 01</h2>
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
    <tbody>
      {/* Row -1 */}
      <div>
        
      </div>
      <tr>
        <th>1</th>
        <td>Chicken Caesar Salad</td>
        <td>20 minutes</td>
        <td>400 calories</td>
       
        <td><button className="btn bg-[#73fec4] outline-none rounded-[50px]">Preparing</button></td>
      
       
      </tr>
    
   
    </tbody>
  </table>


  
</div>

<h2 className="text-[#282828] lexend text-[20px] text-center font-semibold my-4">Currently cooking: 02</h2>
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
    <tbody>
      {/* Row -1 */}
      <tr>
        <th>1</th>
        <td>Chicken Caesar Salad</td>
        <td>20 minutes</td>
        <td>400 calories</td>
        
      </tr>

      
    
   
    </tbody>
  </table>

     <div className="flex justify-end gap-5 mr-8 mt-10">
      <h6 className="text-[#282828cc] font-bold">Total Time = <br />
         45 minutes</h6>
      <h6 className="text-[#282828cc] font-bold">Total Calories = <br />
1050 calories</h6>
      </div>

  
</div>
           
        </div>
    );
};

export default Cook;