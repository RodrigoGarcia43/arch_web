import React from "react"
import { Tile_1 } from "../../../assets/images";
import { Tile_2 } from "../../../assets/images";
import { Tile_3 } from "../../../assets/images";
import { Tile_4 } from "../../../assets/images";
import { Tile_5 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Tiles() {
    const images =
        [
            { src: Tile_1, },
            { src: Tile_2, },
            { src: Tile_3, },
            { src: Tile_4, },
            { src: Tile_5, },
        ]


    return (
        <div className="flex">
            <li className=" max-w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                El Gabinete y Museo de Arqueología poseen en su colección un grupo de azulejos  sevillanos, fabricados a mediados del siglo xviii, del denominado estilo Delft. El conjunto, obsequiado a la institución en 2005, está compuesto por 95 piezas, con ornamentación pintada a mano y temas decorativos independientes. Presenta cinco diseños que abarcan paisajes, personajes, animales, flores y escenas de cacería. En algunos casos la decoración es monocroma (azul) y en otros policroma (azul, morado y naranja), todo sobre fondo blanco.
            </div>
        </div>
    );
}

export default Tiles