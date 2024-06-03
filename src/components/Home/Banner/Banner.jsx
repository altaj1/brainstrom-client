

const Banner = ({ handelSearch, setSearchText, searchText }) => {
    return (
        <div>
            <form onSubmit={ handelSearch } >
                <input type="text" placeholder=" enter serch text"
                onChange={e =>setSearchText(e.target.value)}
                value={searchText}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Banner;