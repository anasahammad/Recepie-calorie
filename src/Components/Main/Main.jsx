
import PropTypes from 'prop-types';
import Cook from "./Cook";
import Recepie from "./Recepie";
const Main = ({recepies, handleWantCook, cooks, handlePrepare, cooking}) => {
 
 
    return (

       <main>
        <section className="container mx-auto my-20">

       
            <div className="text-center w-full mx-auto">
            <h1 className="text-[#150B2B] text-[40px] lexend font-bold">
            Our Recipes
            </h1>

            <p className="  text-[#150b2b99] ">Experience Culinary Excellence with Our Recipes. Explore a World of Flavorful Delights. Indulge in Unforgettable Dining Experiences. </p>
            </div>
           

           <div className="my-10 flex justify-between flex-col lg:flex-row ">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-[58%]">
            {/* -----------------Left------------------- */}
           

              {
                recepies.map(recepie =>  <Recepie key={recepie.recepie_id}  recepie={recepie} handleWantCook={handleWantCook}> </Recepie>)
              }
           
</div>
            {/* -----------------------Right------------------- */}
            <div className="border outline-1 rounded-2xl lg:w-[40%]">
           <Cook  cooking={cooking} handlePrepare={handlePrepare} cook={cooks}></Cook>

</div>
           </div>


        </section>

       </main>
    );
};
Main.propTypes = {
  handleWantCook: PropTypes.func,
  handlePrepare: PropTypes.func,
  recepies: PropTypes.array,
  cooks: PropTypes.array,
  cooking: PropTypes.array


}
export default Main;