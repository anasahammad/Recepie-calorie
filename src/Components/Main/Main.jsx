

import Cook from "./Cook";
import Recepie from "./Recepie";
const Main = ({recepies}) => {
 
 
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
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-[58%]">
            {/* -----------------Left------------------- */}
           

              {
                recepies.map(recepie =>  <Recepie  recepie={recepie}> </Recepie>)
              }
           
</div>
            {/* -----------------------Right------------------- */}
            <div className="border outline-1 rounded-2xl lg:w-[40%]">
           <Cook></Cook>

</div>
           </div>


        </section>

       </main>
    );
};

export default Main;