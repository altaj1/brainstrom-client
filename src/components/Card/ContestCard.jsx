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
        <div className="grid grid-cols-3 justify-around items-center h-auto p-12 w-[70%] mx-auto bg-slate-400">
            <div className=" bg-yellow-200 h- " >
                <img src={image} className="h-32 " alt="" />
            </div>
            {/* center */}
            <div className=" bg-purple-300">
                <h1 className="text-2xl">{title}</h1>
                <div>
                    <p>participants:{contest?.participants}</p>
                </div>
            </div>
            <div className=" bg-rose-400">end</div>
        </div>
    );
};

export default ContestCard;