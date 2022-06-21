import React from "react"
import { Cer_1 } from "../../../assets/images";
import { Cer_2 } from "../../../assets/images";
import { Cer_3 } from "../../../assets/images";
import { Cer_4 } from "../../../assets/images";
import SimpleSlider from "../../Slider";

function Ceramics() {
    const images =
        [
            { src: Cer_1, },
            { src: Cer_2, },
            { src: Cer_3, },
            { src: Cer_4, },
        ]


    return (
        <div className="flex">
            <li className=" max-w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div className="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                Los indicios casi intangibles del comercio de la loza fina inglesa hacia Cuba ―unas pastas alfareras refinadas, de mayor blancura, dureza y calidad que las de la cerámica ordinaria y la mayólica, sus predecesoras―, así como la influencia de esos artículos en la cultura doméstica de la época colonial, se pueden escudriñar a través de la Arqueología Histórica y en los documentos de archivos relativos a la entrada de buques al puerto de la ciudad.
                Las investigaciones en el Centro Histórico de La Habana Vieja y en otras ciudades del país confirman la importancia de esa loza en la vida hogareña de la familia cubana.
            </div>
        </div>
    );
}

export default Ceramics