import { useEffect, useState } from "react";
import FaqsItems from "./FaqsItems";



const Faq = () => {
    const [faqs, setFaqs] = useState([])
    useEffect(()=>{
        fetch('/Fake.json')
        .then(res=>res.json())
        .then(data =>setFaqs(data))
    },[])
    return (
        <div>
          {
            faqs.map((data, idx)=><FaqsItems
            key={idx}
            data= {data}
            ></FaqsItems>)
          }
        </div>
    );
};

export default Faq;