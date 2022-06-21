import React from "react"
import { Glass_1 } from "../../../assets/images";
import { Glass_2 } from "../../../assets/images";
import { Glass_3 } from "../../../assets/images";
import { Glass_4 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Glass() {
    const images =
        [
            { src: Glass_1, },
            { src: Glass_2, },
            { src: Glass_3, },
            { src: Glass_4, },
        ]


    return (
        <div className="flex">
            <li className=" max-w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                La variedad de objetos de vidrio hallados por los arqueólogos en el Centro Histórico La Habana Vieja es un ejemplo del desarrollo alcanzado por los maestros vidrieros, primeramente europeos y luego norteamericanos. Sus producciones desde el siglo XVI hasta finales del siglo XIX arribaron a la isla a través del intenso trasiego comercial de la bahía habanera y otros puertos nacionales; así como a través de otras importantes vías de comercio y contrabando.
            </div>
        </div>
    );
}

export default Glass