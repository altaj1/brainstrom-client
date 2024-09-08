import { useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, handelCategory }) => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <div
      onClick={() => handelCategory(label)}
      className={`flex 
          hover:translate-x-6
          hover:z-40 hover:bg-[#CD5B59]
          rounded-lg
        h-[100px] w-[124px]
        overflow-hidden
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-
      border-b-2
     hover:text-white
      transition
      cursor-pointer  ${
        category === label && "border-b-neutral-800 text-neutral-800"
      } `}
  
    >
      <Icon size={26} />
      <div className="text-xs sm:text-sm md:text-base font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
