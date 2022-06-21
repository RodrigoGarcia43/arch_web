import React from "react"
import { Col_1 } from "../../../assets/images";
import { Col_2 } from "../../../assets/images";
import { Col_3 } from "../../../assets/images";
import { Col_4 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Colonial() {
    const images =
        [
            { src: Col_1, },
            { src: Col_2, },
            { src: Col_3, },
            { src: Col_4, },
        ]


    return (
        <div className="flex">
            <div className=" max-w-sm px-4  w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </div>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                Compuesta por piezas que proceden de excavaciones arqueológicas efectuadas durante años en el Centro Histórico de La Habana Vieja y en otras áreas de nuestro país. Se enriquece sistemáticamente con los trabajos que se acometen en  viviendas, iglesias, fortalezas, plazas, y otros sitios del período colonial.
                Se trata de objetos confeccionados en diferentes materiales, principalmente cerámica, metal, vidrio, madera y hueso. Estas piezas suministran Colonialinformación acerca de la vida en el pasado, y en específico sobre relaciones comerciales, hábitos de consumo, arquitectura, costumbres religiosas y funerarias, domésticas y militares.
            </div>


        </div>
    );
}

export default Colonial