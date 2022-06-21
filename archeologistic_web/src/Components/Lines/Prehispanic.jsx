import React from "react"
import { preh_1 } from "../../assets/images";
import { preh_2 } from "../../assets/images";
import SimpleSlider from "../Slider";

function Prehispanic() {
    const images =
        [
            { src: preh_1, },
            { src: preh_2, },
        ]


    return (
        <div>
            <div className="flex">


                <div class="p-2 text-left text-2xl text-lg text-gray-700 shadow-lg">
                    Refiere investigaciones en contextos de ocupación aborigen y estudios de arte rupestre.
                </div>


            </div>

            <li className=" w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>


        </div>
    );
}

export default Prehispanic