import React from "react";
import Container from "./layout/Container";
import { RiNumber2 } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { FaRotateLeft } from "react-icons/fa6";

const Information = () => {
  return (
    <div className="border-b border-[#F0F0F0]  py-3 md:py-0">
      <Container className=" py-4 md:flex md:justify-between md:items-center md:py-7 font-DM ">
        <div className="warranty flex items-center gap-3.5 ">
          <RiNumber2 className="text-[20px]" />
          <p className="text-[#6D6D6D]">Two years warranty</p>
        </div>
        <div className="Shipping flex items-center gap-3.5 flex-wrap">
          <MdLocalShipping className="text-[20px]" />
          <p className="text-[#6D6D6D]">Free shipping</p>
        </div>
        <div className="Return_policy flex items-center gap-3.5 flex-wrap">
          <FaRotateLeft className="text-[20px]" />
          <p className="text-[#6D6D6D]">Return policy in 30 days</p>
        </div>
      </Container>
    </div>
  );
};

export default Information;
