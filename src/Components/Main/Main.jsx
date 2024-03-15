
import { GoClock } from "react-icons/go";

import cook from '/images/cooking.png';
const Main = () => {
    return (

       <main>
        <section className="container mx-auto my-20">

       
            <div className="text-center w-full mx-auto">
            <h1 className="text-[#150B2B] text-[40px] lexend font-bold">
            Our Recipes
            </h1>

            <p className="  text-[#150b2b99] ">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
           

           <div className="my-10 flex justify-between flex-col-reverse lg:flex-row ">
            {/* -----------------Left------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-[58%]">


            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="text-[#282828] lexend text-[20px] font-semibold">Spaghetti Bolognese</h2>
    <p className="text-[#878787] fira-sans ">Classic Italian pasta dish with savory meat sauce.</p>
    <div className="divider"></div>

    <h2 className="text-[#282828] lexend text-[18px] font-semibold">Ingredients: 6</h2>
    <ul className="list-disc">
        <li className="text-[#878787] fira-sans ">500g ground beef</li>
        <li className="text-[#878787] fira-sans ">500g ground beef</li>
        <li className="text-[#878787] fira-sans ">500g ground beef</li>
        
    </ul>

    <div className="divider"></div>

    <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 ">
<p><GoClock></GoClock></p>
            <p>30 minutes</p>
        </div>

        <div className="flex items-center gap-2">
            <img src={cook} alt="" />
            <p>600 calories</p>
        </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#73fec4] outline-none rounded-[50px]">Want to Cook</button>
    </div>
  </div>
</div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="text-[#282828] lexend text-[20px] font-semibold">Spaghetti Bolognese</h2>
    <p className="text-[#878787] fira-sans ">Classic Italian pasta dish with savory meat sauce.</p>
    <div className="divider"></div>

    <h2 className="text-[#282828] lexend text-[18px] font-semibold">Ingredients: 6</h2>
    <ul className="list-disc">
        <li className="text-[#878787] fira-sans ">500g ground beef</li>
        <li className="text-[#878787] fira-sans ">500g ground beef</li>
        <li className="text-[#878787] fira-sans ">500g ground beef</li>
        
    </ul>

    <div className="divider"></div>

    <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 ">
<p><GoClock></GoClock></p>
            <p>30 minutes</p>
        </div>

        <div className="flex items-center gap-2">
            <img src={cook} alt="" />
            <p>600 calories</p>
        </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#0BE58A] outline-none rounded-[50px]">Want to Cook</button>
    </div>
  </div>
</div>

            </div>

            {/* -----------------------Right------------------- */}

            <div className="border outline-1 rounded-2xl lg:w-[40%]">

<h2 className="text-[#282828] lexend text-[20px] text-center font-semibold my-4">Want to cook: 01</h2>
<div className="divider w-1/2 mx-auto"></div>
            <div class="overflow-x-auto">
  <table class="table table-zebra">
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
        <td><button className="btn bg-[#73fec4] outline-none rounded-[50px]">Preparing</button></td>
      </tr>
    
   
    </tbody>
  </table>


  
</div>

<h2 className="text-[#282828] lexend text-[20px] text-center font-semibold my-4">Currently cooking: 02</h2>
<div className="divider w-1/2 mx-auto"></div>
            <div class="overflow-x-auto">
  <table class="table table-zebra">
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


           </div>


        </section>

       </main>
    );
};

export default Main;