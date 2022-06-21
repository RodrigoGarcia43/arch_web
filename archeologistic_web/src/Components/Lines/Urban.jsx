import React from "react"
import { urb_1 } from "../../assets/images";

import SimpleSlider from "../Slider";

function Urban() {
    const images =
        [
            { src: urb_1, },
        ]


    return (
        <div>
            <div className="flex">


                <div class="p-2 text-left text-2xl text-lg text-gray-700 shadow-lg">
                    Aborda los estudios sobre el crecimiento urbano y arquitectónico de la ciudad; sobre la pervivencia e interacción aborigen durante el período colonial; el análisis del desarrollo edilicio y funcional de espacios domésticos, civiles, militares, religiosos y funerarios; los estudios de relaciones comerciales y prácticas de consumo; los hábitos alimentarios y su impacto sobre la flora y la fauna habaneras y los estudios sobre permanencias de poblaciones foráneas asentadas en la isla.
                </div>


            </div>

            <li className=" w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>


        </div>
    );
}

export default Urban