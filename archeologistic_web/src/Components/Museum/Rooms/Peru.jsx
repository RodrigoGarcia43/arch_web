import React from "react"
import { Per_1 } from "../../../assets/images";
import { Per_2 } from "../../../assets/images";
import { Per_3 } from "../../../assets/images";
import { Per_4 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Peru() {
    const images =
        [
            { src: Per_1, },
            { src: Per_2, },
            { src: Per_3, },
            { src: Per_4, },
        ]


    return (
        <div className="flex">
            <li className=" max-w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                La muestra expositiva exhibe piezas cerámicas correspondientes a más de una decena de culturas precolombinas que habitaron el área suramericana antes y durante el imperio Inca, que alcanzara una extensión desde Pastos, en los andes colombianos, hasta el río Maule en Chile y la provincia de Tucumán en Argentina.
                Esta sala ha sido dedicada a tres excelsos hombres de la arqueología latinoamericana: el peruano Julio C. Tello Rojas, quien laboró en varios sitios, particularmente Mochica y Chancay, y realizara importantes hallazgos sobre las culturas Chavín y Paracas; y a los cubanos Antonio Núñez Jiménez y Ernesto Tabío Palma, participante este último en excavaciones realizadas en áreas de la costa central del Perú entre los años 1953 y 1960.
            </div>
        </div>
    );
}

export default Peru