/* eslint-disable react/prop-types */


const ContestCard = ({contest}) => {
    console.log(contest)
    const {
        title,
        image,
        from,
        to,
        type,
        prizeMoney,
        price,
        description} = contest;
    return (
        <div className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50 grid grid-cols-3">
            <div className="flex items-center flex-col justify-center">
               <img src={image} alt="" />
            </div>
            <div className="mt-3 text-center">
                <h4 className="text-2xl font-bold hover:underline">{title}</h4>
                <p className="mt-2"> {description.length > 50
                        ? description.split(".")[0].slice(0, 30 ) +
                          "...." +
                          description.split(".")[1]
                        : description}</p>
            </div>
            <div className="flex items-center flex-col justify-between mt-4">
                <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Read more</a>
                <div>
                    <a rel="noopener noreferrer" href="#" className="flex items-center">
                        <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                        <span className="hover:underline dark:text-gray-600">Leroy Jenkins</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ContestCard;