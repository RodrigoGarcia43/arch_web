import React from "react"
import { Abor_1 } from "../../../assets/images";
import { Abor_2 } from "../../../assets/images";
import { Abor_3 } from "../../../assets/images";
import { Abor_4 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Aboriginal() {
    const images =
        [
            { src: Abor_1, },
            { src: Abor_2, },
            { src: Abor_3, },
            { src: Abor_4, },
        ]


    return (
        <div className="justify-center">
            <div className="flex">

                <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                    La colección de piezas aborigen está conformada por piezas que provienen de excavaciones arqueológicas hechas en el territorio nacional, donde intervinieron especialistas y profesionales del Departamento de Antropología de la Academia de Ciencias de Cuba desde 1962, y por eminentes arqueólogos que anterior a esta fecha realizaban dichas labores en nuestro país.
                    Exhibe la muestra un panorama de las culturas que poblaron el país, desde la etapa Preagroalfarera (6000 a. n. e. hasta 1500 n. e.) hasta la etapa Agroalfarera (800 n.e -1500 n.e.)  Son notables las colecciones de arte taíno con sus numerosos idolillos y colgantes figurativos, de evidente significado esotérico, así como un grupo de vasijas que revelan una amplia variedad de formas, decoraciones y usos.
            </div>
            </div>
            <div className="max-w-sm py-12  h-full justify-center ">
                <SimpleSlider images={images} />
            </div>
        </div>
    );
}

export default Aboriginal