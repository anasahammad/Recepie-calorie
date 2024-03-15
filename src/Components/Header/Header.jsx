
import people from '/images/People.svg'




const Header = () => {
    return (
        <header className='lexend'>

          {/* Navbar Start */}
            <div className="navbar bg-base-100 font-lexend">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#150b2bb3]">
        <li><a>Home</a></li>
        <li>
          <a>Recipes</a>
        </li>
        <li><a>About</a></li>
      <li><a>Search</a></li>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#150b2bb3]">
      <li><a>Home</a></li>
      <li>
        
          <li>Recipes</li>
          
       
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">



<div className='hidden lg:block'>
<div className="flex form-control items-center  flex-row-reverse border border-gray-300 rounded-md overflow-hidden ">
      <input
        type="text"
        placeholder="Search"
        className="py-2 px-4  focus:outline-none rounded-[50px]"
      />
      <button type="submit" className=" text-left px-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         
        </svg>
      </button>
    </div>
</div>

  <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={people} />
        </div>
      </div>
  </div>
</div>


{/* Navbar End */}

{/* Hero area start */}

<section className="container mx-auto">
<div className="hero min-h-screen rounded-3xl"  style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/distinguished-chef-bustling-kitchen-orchestrating-symphony-culinary-creations_154823-203.jpg?w=740")'}}>
  <div className="hero-overlay bg-[#150b2be6]-to-b from-[#150b2b00]to-[#150b2be6]  rounded-3xl"></div>

  <div className="hero-content  text-center text-neutral-content">
    <div className="lg:max-w-[70%]">
      <h1 className="mb-5 text-2xl lg:text-5xl  font-bold text-white">Discover an exceptional cooking class tailored for you!.</h1>
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      
      <button className="btn bg-[#0BE58A] outline-none">Explore Now</button>
      <button className="btn bg-transparent ml-6 text-white">Our Feedback</button>
    </div>
  </div>
</div>
</section>


{/* Hero area end */}
        </header>
    );
};

export default Header;