import { useSearchParams } from "react-router-dom";


const CategoryBox = ({label, icon: Icon, handelCategory}) => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    return (
        <div
        onClick={()=>handelCategory(label)}
        className={`flex 
        h-32 w-32
        overflow-hidden
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-3
      border-b-2
     hover:text-neutral-800
      transition
      cursor-pointer  ${
        category === label && 'border-b-neutral-800 text-neutral-800'
      } `}
      >
        <Icon size={26} />
        <div className='text-sm font-medium'>{label}</div>
      </div>
    );
};

export default CategoryBox;