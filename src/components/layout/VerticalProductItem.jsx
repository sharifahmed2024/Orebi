import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate, FaCartShopping } from "react-icons/fa6";


const Li = ({name,iconName }) => {
return(
    <li className="flex justify-end gap-3 items-center cursor-pointer font-DM transition-all duration-150 text-ptext text-base font-bold hover:text-Primary">{name} {iconName}</li>

)
}


const VerticalProductItem = ({Pname, Price, Color, Offer, src, OfferEye,className }) => {

  let [Offershow, SetOfferShow] = useState(OfferEye);
    
  return (
    <div className={`grid grid-cols-6 gap-3 ${className}`}>
      <div className="image relative group col-span-1 bg-red-400">
        <img className="w-full h-full object-cover" src={src} />

       
        <button className={`absolute top-5 left-5  w-[92px] bg-Primary text-white font-DM text-sm font-bold ${Offershow ? "py-2" : "py-0"}`}>{Offer}</button>
      </div>

      <div className="text flex flex-col justify-between p-3 col-span-4">
        <div className=" flex justify-between pt-6 pb-4 col-span-4">
          <h5 className="font-DM font-bold text-xl ">{Pname}</h5>
          <span className="font-DM font-normal leading-7 text-[#767676]">
            ${Price}
          </span>
        </div>
        <div className="description">
      <p className="font-DM text-ptext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam ad expedita adipisci deleniti aliquid numquam omnis voluptas consequuntur dolores reprehenderit, maiores incidunt ratione officiis totam quia, odit ducimus rem.</p>
     </div>
        <p className="font-DM font-normal leading-7 text-[#767676]">{Color}</p>
     
      </div>
      <div className="overlay px-7 py-6 col-span-1 flex items-center justify-end">
          <ul className="flex flex-col gap-3">
           <Li name="Wish List" iconName={<FaHeart className='text-Primary' />} />
           <Li name="Compare" iconName={<FaArrowsRotate className='text-Primary' />} />
           <Li name="Add to Cart" iconName={<FaCartShopping className='text-Primary'/>} />
             
          </ul>
        </div>
    </div>
  );
};

export default VerticalProductItem;
