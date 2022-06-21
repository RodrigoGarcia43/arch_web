import React from "react"
import { Toy_1 } from "../../../assets/images";
import { Toy_2 } from "../../../assets/images";
import { Toy_3 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Toys() {
    const images =
        [
            { src: Toy_1, },
            { src: Toy_2, },
            { src: Toy_3, },
        ]


    return (
        <div className="flex">
            <li className=" max-w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                En los sitios arqueológicos habaneros del siglo xvi al xviii suelen aparecer, esporádicamente, vajillas en miniatura, silbatos, figuras humanas y de animales confeccionadas en cerámica. Estas piezas arribaron inicialmente desde España y en el siglo xviii se suma México como otro gran centro alfarero. Hallazgos similares provienen en el siglo xix desde Francia y Alemania. Estas elaboraciones -aparentemente sencillas- servían para establecer la conexión de las niñas y los niños con la sociedad que les rodeaba y, por tanto, con la vida diaria de los adultos.
            </div>
        </div>
    );
}

export default Toys