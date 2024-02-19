import React from "react";
import expand_icon from '../assets/ico/expand.svg';
import EarningGraph from "./graphs/EarningGraph";
import FeesGraph from './graphs/FeesGraph';
import Calendar from "react-calendar";

const Home = () => {

   return (
      <div className="flex flex-col">
         <div className="flex flex-col lg:flex-row">
            <div className="data flex flex-col justify-between">


               {/* cards */}
               <div className="cards space-x-2 text-sm bg-gray-100 rounded-lg m-3  flex flex-row flex-wrap justify-evenly">
                  <div className="flex w-56 border-2 border-red-300 flex-col justify-evenly space-y-4 h-28 my-3 rounded-xl p-3 items-start">
                     <p> Total Numbers Of School</p>
                     <div className="flex flex-row justify-between w-full">
                        <p>5</p>
                        <img src={expand_icon}Admission alt="exnd" className="items-end" />
                     </div>
                  </div>
                  <div className="flex  w-56 border-2 border-red-300 flex-col justify-evenly space-y-4 h-28 my-3 rounded-xl p-3 items-start">
                     <p> Total Fees</p>
                     <div className="flex flex-row justify-between w-full">
                        <p>5</p>
                        <img src={expand_icon} alt="exnd" className="items-end" />
                     </div>
                  </div>
                  <div className="flex w-56 border-2 border-red-300 flex-col justify-evenly space-y-4 h-28 my-3 rounded-xl p-3 items-start">
                     <p> Total Strength</p>
                     <div className="flex flex-row justify-between w-full">
                        <p>5</p>
                        <img src={expand_icon} alt="exnd" className="items-end" />
                     </div>
                  </div>
                  <div className="flex w-56 border-2 border-red-300 flex-col justify-evenly space-y-4 h-28 my-3 rounded-xl p-3 items-start">
                     <p> Income and Expenses</p>
                     <div className="flex flex-row justify-between w-full">
                        <p>5</p>
                        <img src={expand_icon} alt="exnd" className="items-end" />
                     </div>
                  </div>
               </div>

               {/* Graphs */}
               <div className="flex bg-gray-100 rounded-lg m-3 flex-col md:flex-row md:items-center md:justify-between">
                  <EarningGraph className="md:w-1/2 md:h-auto" />
                  <FeesGraph className="py-96" />
               </div>

            </div>

            {/* Calendar */}
            <div className=" flex bg-gray-100 rounded-lg m-3 px-3">
               <Calendar className=" mx-auto bg-blue-400 rounded-xl border-2 flex flex-col items-center justify-center my-10 py-10" />
            </div>
         </div>

         {/* Buttons */}
         <div className="flex flex-col items-start mx-3 px-3 bg-gray-100 rounded-lg m-3 py-3 space-y-3">
            <button className="bg-violet-400 py-2 text-gray-200 px-2 rounded-md w-60">Total Number Of School</button>
            <button className="bg-violet-400 py-2 text-gray-200 px-2 rounded-md w-60">Total Fees</button>
            <button className="bg-violet-400 py-2 text-gray-200 px-2 rounded-md w-60">School 1/2/3 Fees</button>
            <button className="bg-violet-400 py-2 text-gray-200 px-2 rounded-md w-60">Income and Expenses</button>
            <button className="bg-violet-400 py-2 text-gray-200 px-2 rounded-md w-60">School 1/2/3</button>
         </div>

      </div>
   );
};

export default Home;
