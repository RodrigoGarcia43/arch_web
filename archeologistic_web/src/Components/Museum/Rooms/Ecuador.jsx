import React from "react"
import { Ecu_1 } from "../../../assets/images";
import { Ecu_2 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Ecuador() {
    const images =
        [
            { src: Ecu_1, },
            { src: Ecu_2, },
        ]


    return (
        <div className="flex">
            <li className=" max-w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                El área mesoamericana se halla ocupada en la actualidad por un conjunto de países integrados por Guatemala, Honduras, El Salvador, Belice y gran parte de México, incluida  la península de Yucatán. La muestra expositiva recorre diferentes culturas que poblaron esta zona, partiendo de la más antigua denominada Olmeca o La Venta, hasta llegado el punto de contacto con los europeos a través de los Aztecas.
                Ecuador está representado por piezas de cerámica procedentes de variadas culturas, especialmente la Valdivia y sus famosas “Venus”, fechadas entre 3 500 a.n.e. – 2 000 a.n.e., las cuales constituyen los ejemplares más antiguos que exhibe el Museo de Arqueología.
            </div>
        </div>
    );
}

export default Ecuador