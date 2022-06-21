import React from "react"
import { Cons_1 } from "../../../assets/images";
import { Cons_2 } from "../../../assets/images";
import { Cons_3 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Conservation() {
    const images =
        [
            { src: Cons_1, },
            { src: Cons_2, },
            { src: Cons_3, },
        ]


    return (
        <div className="flex">
            <li className=" max-w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                Desde su fundación, el Museo de Arqueología tuvo como parte fundamental de su objeto de trabajo la restauración de las colecciones de piezas arqueológicas encontradas en las excavaciones del centro histórico desde 1987 hasta la actualidad, con dataciones que abarcan los siglos XVI al XX.
                Las principales problemáticas que presentan las piezas arqueológicas que restauran nuestros especialistas están relacionadas con el ambiente en que son encontradas: suciedad, fragmentación, desprendimiento del vidriado, faltantes, entre otras. Dentro del proceso de restauración es fundamental  la consolidación del estado de conservación de la manufactura original para posteriormente proceder a la limpieza química y mecánica, pegado de fragmentos, integración de las partes faltantes, acabado, integración pictórica, selección cromática a “puntillismo” con tonos bajos, uso de colores al agua y protección con barnices. En cada caso se hace un registro minucioso de las diversas fases de intervención para la posterior elaboración de la ficha técnica, documento donde se describen en detalle los aspectos relacionados con la restauración del objeto, y se hacen recomendaciones para su preservación.
            </div>
        </div>
    );
}

export default Conservation