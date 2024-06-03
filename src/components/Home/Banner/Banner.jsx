

const Banner = ({ handelSearch, setSearchText, searchText }) => {
    return (
        <div  className="relative">
            <div className="bg-gradient-to-r from-[#061f31] to-pink-500 relative h-[700px] w-full">
                <img src="https://i.ibb.co/550RR55/html-css-collage-concept-with-person.jpg" className="h-[700px] w-full opacity-50  " alt="" />
                <div className="z-40 absolute  bottom-10">
            <h1 className="text-4xl">ahsdakheirhfai</h1>
            <form onSubmit={ handelSearch } >
                <input type="text" placeholder=" enter serch text"
                onChange={e =>setSearchText(e.target.value)}
                value={searchText}
                />
                <input type="submit" />
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;