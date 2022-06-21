import React from "react"
import { ind_1 } from "../../assets/images";
import { ind_2 } from "../../assets/images";
import { ind_3 } from "../../assets/images";
import SimpleSlider from "../Slider";

function Industrial() {
    const images =
        [
            { src: ind_1, },
            { src: ind_2, },
            { src: ind_3, },
        ]


    return (
        <div>
            <div className="flex">


                <div className="p-2 text-left text-2xl text-lg text-gray-700 shadow-lg">
                    Estudios sobre asentamientos y procesos productivos relacionados con el patrimonio azucarero, cafetalero y portuario
                </div>


            </div>

            <li className=" w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>


        </div>
    );
}

export default Industrial