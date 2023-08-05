import React from "react";
import Footer from "./Footer";

const Suggestion = () => {
    return (
        <div>
            <div className="flex justify-center">
                
                <div className="flex-wrap w-[800px] bg_suggest bg-no-repeat bg-cover border-white-500 border-2 p-[20px] rounded h-full ">
                    <h1 className="text-3xl font font-poppins text-center py-[10px] text-white">Website Suggestion</h1>
                    <form className="h-full  overflow-hidden">
                        <div className="flex my-3 ">
                            <input type="text" placeholder="Name" className="h-[40px] w-[300px] pl-5 rounded bg-gray-700 mx-[8px]" />
                            <input type="text" placeholder="Email" className="h-[40px] w-[300px] pl-5 rounded bg-gray-700 mx-[8px]" />
                            <input type="tel" placeholder="Your Phone no." className="h-[40px] w-[300px] pl-5 rounded bg-gray-700 mx-[8px]"></input>
                        </div>
                        <textarea placeholder="Suggestion" className="p-[10px] my-2 rounded bg-gray-700 w-full h-[150px] hover:shadow-lg shadow-blue-400 focus:none"></textarea>
                        <input type="submit" className="w-[100px] bg-[#22d3ee] float-right m-[5px] h-[50px] rounded text-white" />
                    </form>
                </div>
            </div>
                <Footer />
        </div>


    );
}

export default Suggestion;