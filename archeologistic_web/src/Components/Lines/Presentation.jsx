import React from "react"
import { doc_1 } from "../../assets/images";
import { doc_2 } from "../../assets/images";
import { doc_3 } from "../../assets/images";
import SimpleSlider from "../Slider";

function Presentation() {
    const images =
        [
            { src: doc_1, },
            { src: doc_2, },
            { src: doc_3, },
        ]


    return (
        <div>
            <div className="flex">


                <div className="p-2 text-left text-2xl text-lg text-gray-700 shadow-lg">
                    Se elaboran los expedientes históricos de los sitios que son intervenidos arqueológicamente con anterioridad o durante las labores de restauración. Se investigan inmuebles y espacios dentro y fuera del Centro Histórico de La Habana Vieja, que requieren datos sobre características constructivas, tipología arquitectónica, relación de propietarios, usos y transformaciones que han ocurrido en los mismos.<br />
                    Entre las temáticas de investigación que se desarrollan, pueden mencionarse:<br />
                    • La ciudad: a partir de la cartografía histórica y fuentes documentales se aborda el desarrollo urbanístico de La Habana, desde la incipiente villa a la ciudad cosmopolita en que se convirtió, sitio de confluencia del sistema de flotas y uno de los puertos más importante de América. Las plazas y las funciones de las mismas, entre otros espacios públicos creados dentro y fuera de la ciudad amurallada.<br />
                    • Fortificaciones: el análisis parte de la ubicación de las mismas dentro de los sistemas defensivos de la ciudad. Se profundiza en la evolución de la artillería y cómo esta era emplazada en los sitios, elementos constructivos, así como el uso de cada espacio. Ej. Castillo San Salvador de la Punta, Batería Santo Domingo de Atarés, torreón de San Lázaro, reductos Santa Dorotea de la Luna de la Chorrera y de Cojímar, y la Muralla de la ciudad.<br />
                    • Edificios religiosos: además de hacer una búsqueda sobre elementos estructurales, cambios de usos y tipologías, se profundiza sobre la vida cotidiana de las órdenes religiosas que se asentaron en el período colonial. Sitios a destacar son la Iglesia de San Francisco de Asís, la Iglesia San Francisco de Paula y el Convento de Santa Clara de Asís.<br />
                    • Inmueble domésticos: se han definido nuevas tipologías en la arquitectura doméstica de los siglos XVI, XVII y XVIII. A partir del análisis de las fuentes documentales se ha tratado de interpretar la planimetría de los inmuebles, emplazamientos, usos de los espacios y mobiliario. Se han definido, dentro de estos espacios domésticos, los patios como espacios naturales y patrimoniales.<br />
                    • Arquitectura industrial: participación en proyectos vinculados a los cafetales del oriente de la Sierra del Rosario y en otros sitios de interés. Se han estudiado variantes de organización de los espacios, usos de los mismos y sucesión de propietarios de los sitios.<br />
                    • Investigaciones históricas relacionadas con el patrimonio subacuático. Es una temática de investigación que aborda el estudio de naufragios y sitios de contrabando. Tipos de embarcaciones, mercadería que se importaba, entre otros elementos de interés.<br />
                    • Vida cotidiana: se han investigado varias aristas relacionadas con este gran tema: alimentación, objetos y enseres de uso cotidiano, costumbres, festividades, redes familiares, sectores sociales (esclavos, mujeres e infantes), por citar algunos de interés.<br />

                </div>


            </div>


            <li className="w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>


        </div>
    );
}

export default Presentation