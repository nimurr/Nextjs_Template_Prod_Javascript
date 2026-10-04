"use client";

import PrimaryButton from "@/components/global/PrimaryButton";
import { IconMapPin } from "@tabler/icons-react";
import { toast } from "react-toastify";

export default function Home() {
  const handleClick = () => {
    toast.info("Toast Message successfully show !");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>

        <div className="flex items-center justify-center mb-5">
          <PrimaryButton onClick={handleClick} startIcon={<IconMapPin stroke={2} />} className=" cursor-pointer">
            Primary Button
          </PrimaryButton>
        </div>

        <div className="text-center text-white space-x-1">
          <span className="bg-amber-700 p-1 rounded">Next js</span>
          <span className="bg-blue-700 p-1 rounded">Tailwind</span>
          <span className="bg-green-700 p-1 rounded">JavaScript</span>
          <span className="bg-red-700 p-1 rounded">Redux Toolkit</span>
          <span className="bg-purple-700 p-1 rounded">Toastify</span>
          <span className="bg-pink-700 p-1 rounded">Google Fonts</span>
        </div>
      </div>
    </div>
  );
}
