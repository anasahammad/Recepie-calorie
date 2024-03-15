
import people from '/images/People.svg'



const Header = () => {
    return (
        <header>
            <div className="navbar bg-base-100 font-lexend">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#150b2bb3]">
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

  {/* <div class="form-control hidden lg:block">
      <input type="text" placeholder=" Search" className="input input-bordered rounded-[50px] bg-[#150b2b0d] w-24 md:w-auto" />

      <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div> */}


<div className='hidden lg:block'>
<div className="flex form-control items-center  flex-row-reverse border border-gray-300 rounded-md overflow-hidden ">
      <input
        type="text"
        placeholder="Search"
        className="py-2 px-4  focus:outline-none rounded-[50px]"
      />
      <button type="submit" className=" text-left px-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         
        </svg>
      </button>
    </div>
</div>

  <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={people} />
        </div>
      </div>
  </div>
</div>
        </header>
    );
};

export default Header;