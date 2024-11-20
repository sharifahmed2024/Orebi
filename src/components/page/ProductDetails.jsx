import React, { useState } from "react";
import Container from "../layout/Container";
import Headertext from "../layout/Headertext";
import { FaAngleRight, FaCaretDown, FaStar } from "react-icons/fa6";
import pd1 from "/ProductDetails/pd1.png";
import special2 from "/SpecialOffer/special2.png";
import special3 from "/SpecialOffer/special3.png";
import special4 from "/SpecialOffer/special4.png";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "../layout/Button";
import Input from "../layout/Input";

const ProductDetails = () => {
  let [show, setShow] = useState(false);
  let [size, setSize] = useState("S");
  let [quantity, setQuantity] = useState(1);

  let [Accordiant, setAccordiant] = useState(false);
  let [Accordiant2, setAccordiant2] = useState(false);

  let ManageSize = (element) => {
    setSize(element.target.value);
  };

  return (
    <div className="py-16">
      <Container>
        <div>
          <Headertext
            className="mb-2.5"
            Headertext={`${window.location.pathname.split("/")[1]} ${
              window.location.pathname.split("/")[2]
            }`}
          />
          <p className="flex items-center capitalize mb-32 text-[#767676]">
            Home <FaAngleRight />
            {`${window.location.pathname.split("/")[1]} ${
              window.location.pathname.split("/")[2]
            }`}
          </p>
        </div>

        <div className="h-[1600px] grid grid-cols-2 grid-rows-2 gap-10">
          <div className="pshow bg-slate-200">
            <img className="w-full h-full object-cover" src={pd1} alt="" />
          </div>

          <div className="pshow bg-slate-200">
            <img className="w-full h-full object-cover" src={special4} alt="" />
          </div>

          <div className="pshow bg-slate-200">
            <img className="w-full h-full object-cover" src={special3} alt="" />
          </div>

          <div className="pshow bg-slate-200">
            <img className="w-full h-full object-cover" src={special2} alt="" />
          </div>
        </div>

        <div className="heading mt-12">
          <Headertext Headertext="Product" />
        </div>

        <div className="details max-w-[780px] ">
          <div className="flex items-center flex-wrap border-b border-[#F0F0F0] gap-6 mb-10">
            <div className="reviewicon flex items-center text-[#FFD881] gap-0.5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className=" font-DM font-normal text-sm text-ptext">1 Review</p>

            <p className="w-full flex items-center gap-5 pb-6">
              <del className="text-ptext">
                <span className="font-DM font-normal text-ptext">$88.00</span>
              </del>
              <span className="font-bold text-xl text-Primary">$44.00</span>
            </p>
          </div>

          <ul>
            <li className="flex items-center gap-11 ">
              <b className="font-DM">COLOR:</b>
              <div className="flex gap-1">
                <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#979797] transition-all duration-200 hover:w-7 hhover:h-7 hover:border-[0px]"></span>
                <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#FF8686] transition-all duration-200 hover:w-7 hhover:h-7 hover:border-[0px]"></span>
                <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#7ED321] transition-all duration-200 hover:w-7 hhover:h-7 hover:border-[0px]"></span>
                <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#B6B6B6] transition-all duration-200 hover:w-7 hhover:h-7 hover:border-[0px]"></span>
                <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#15CBA5] transition-all duration-200 hover:w-7 hhover:h-7 hover:border-[0px]"></span>
              </div>
            </li>

            <li className="flex items-center gap-[76px] my-[30px]">
              <b className="font-DM">SIZE:</b>
              <div className="w-[139px] border px-5 py-1 relative">
                <p className="text-ptext">{size}</p>
                <div
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                >
                  <FaCaretDown className="text-ptext" />
                </div>

                <ul
                  onClick={ManageSize}
                  className={`w-[139px] absolute top-full left-0 transition-all duration-300 ${
                    show
                      ? "top-full opacity-100 visible"
                      : "top-0 opacity-0 invisible"
                  }`}
                >
                  <input
                    value="S"
                    className="border px-5 py-1 w-full outline-none"
                    type="text"
                  />
                  <input
                    value="M"
                    className="border px-5 py-1 w-full outline-none"
                    type="text"
                  />
                  <input
                    value="L"
                    className="border px-5 py-1 w-full outline-none"
                    type="text"
                  />
                  <input
                    value="XL"
                    className="border px-5 py-1 w-full outline-none"
                    type="text"
                  />
                </ul>
              </div>
            </li>

            <li className="flex items-center gap-[29px] pb-[20px] border-b  mb-[30px]">
              <b className="font-DM">QUANTITY:</b>
              <div className="w-[139px] border py-1 grid grid-cols-3">
                <span
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity-- : quantity)
                  }
                  className="flex items-center justify-center text-ptext"
                >
                  <FiMinus />
                </span>
                <span className="flex items-center justify-center text-ptext ">
                  {" "}
                  {quantity}{" "}
                </span>
                <span
                  onClick={() => setQuantity(quantity++)}
                  className="flex items-center justify-center text-ptext"
                >
                  {" "}
                  <FiPlus />
                </span>
              </div>
            </li>

            <li className="flex items-center gap-7 pb-[30px] border-b  mb-5">
              <b className="font-DM">STATUS:</b>
              <p className="text-ptext">In stock</p>
            </li>
          </ul>

          <div className="btn flex gap-5 pb-[30px] border-b  mb-6">
            <Button
              className="!font-bold w-[200px]"
              ButtonText="Add to Wish List"
            />
            <Button className="!font-bold w-[200px]" ButtonText="Add to Cart" />
          </div>

          <div className="Accordiant1 pb-[25px] border-b  mb-[25px]">
            <ul>
              <li>
                <p
                  onClick={() => setAccordiant(!Accordiant)}
                  className="font-bold text-[23px] text-Primary font-DM"
                >
                  FEATURES & DETAILS
                </p>
                <div
                  className={`bg-slate-50 transition-all duration-300 ${
                    Accordiant
                      ? "h-auto p-5 overflow-auto"
                      : "h-0 p-0 overflow-hidden"
                  }`}
                >
                  <b>Lorem ipsum dolor sit amet</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="Accordiant2 pb-[25px] border-b  mb-[150px]">
            <ul>
              <li>
                <p
                  onClick={() => setAccordiant2(!Accordiant2)}
                  className="font-bold text-[23px] text-Primary font-DM"
                >
                  SHIPPING & RETURNS
                </p>
                <div
                  className={`bg-slate-50 transition-all duration-300 ${
                    Accordiant2
                      ? "h-auto p-5 overflow-auto"
                      : "h-0 p-0 overflow-hidden"
                  }`}
                >
                  <b>Lorem ipsum dolor sit amet</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="Reviews">
          <div className="flex gap-16 items-center">
            <h4 className="font-DM text-ptext text-xl font-normal">
              Description{" "}
            </h4>
            <h4 className="font-DM text-Primary text-xl font-bold">
              Reviews (1)
            </h4>
          </div>
          <div className="mt-11 border-b pb-4 mb-10">
            <p className="font-DM text-ptext text-sm font-normal">
              1 review for Product
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-9">
                <h4 className="font-DM text-Primary text-base font-normal">
                  John Ford
                </h4>
                <div className="icons flex text-[#FFD881] w-14">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <h5 className="font-DM text-ptext text-base font-normal">
                6 months ago
              </h5>
            </div>
            <div className="mt-3.5 mb-20 border-b pb-3.5">
              <p className="font-DM text-ptext text-base font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>

        <div className="addreview my-10 flex flex-col gap-y-6 pb-16 mb-16">
          <div>
            <h2 className="font-DM font-bold text-xl">Add a Review</h2>
          </div>
          <Input
            className="w-[780px] font-DM text-base"
            LabelText="Name"
            type="text"
            placeholder="Your name here"
            id="Name"
          />

          <Input
            className="w-[780px] font-DM text-base"
            LabelText="Email"
            type="text"
            placeholder="Your email here"
            id="Email"
          />

          <Input
            className="w-[780px] font-DM text-base"
            LabelText="Review"
            type="text"
            placeholder="Your review here"
            id="Review"
          />

          <Button className="w-[200px]" ButtonText="Post"/>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
