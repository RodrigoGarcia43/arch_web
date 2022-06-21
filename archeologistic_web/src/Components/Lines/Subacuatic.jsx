import React from "react"
import { suba_1 } from "../../assets/images";
import { suba_2 } from "../../assets/images";
import { suba_3 } from "../../assets/images";
import { suba_4 } from "../../assets/images";
import SimpleSlider from "../Slider";

function Subacuatic() {
    const images =
        [
            { src: suba_1, },
            { src: suba_2, },
            { src: suba_3, },
            { src: suba_4, },
        ]


    return (
        <div>
            <div className="flex">


                <div class="p-2 text-left text-2xl text-lg text-gray-700 shadow-lg">
                    Refiere el estudio del patrimonio cultural sumergido y en franjas litorales, vinculado a pecios, naufragios, relaciones comerciales, arquitectura naval, instalaciones costeras.
                </div>


            </div>

            <li className=" w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>


        </div>
    );
}

export default Subacuatic