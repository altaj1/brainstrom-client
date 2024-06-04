/* eslint-disable react/prop-types */

import { format } from "date-fns";
import { Link } from "react-router-dom";


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
        _id,
        description,
    } = contest;
    return (
        <div className="dark:bg-gray-100 dark:text-gray-800 ">
        <div className="container max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-lg divide-x divide-dashed dark:bg-gray-50 grid lg:grid-cols-3 gap-5">
            <div className="flex items-center flex-col justify-center">
               <img className="rounded-lg lg:h-[344px ] lg:w-[258px]" src={image} alt="" />
            </div>
            <div className="mt-3 space-y-5 ">
                <h4 className="text-2xl font-bold hover:underline">{title}</h4>
                <p className="mt-2"> {description.length > 50
                        ? description.split(".")[0].slice(0, 30 ) +
                          "...." +
                          description.split(".")[1]
                        : description}</p>

                        <div className="flex gap-7">
                            <p>
                            From: {format(new Date(from), 'PP')} 
                            </p>
                            <div className="flex items-center ">
                                <img className="h-5" src="https://i.ibb.co/KLjpDLY/online-removebg-preview.png" alt="" />
                                <p>{type}</p>
                            </div>
                        </div>

            </div>
            <div className="flex items-center flex-col justify-between mt-4">
                <p>Price: ${price}</p>
                <p>Prize Money: ${prizeMoney}</p>
                <div className="mt-5 lg:0">
                    <Link to={`/contestDetails/${_id}`} className="bg-[#FF6F61] p-3 rounded-lg font-medium text-white hover:shadow-lg">View Details</Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ContestCard;