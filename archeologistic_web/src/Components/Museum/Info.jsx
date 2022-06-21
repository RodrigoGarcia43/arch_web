import React from "react"
import { Museum_pres_1 } from "../../assets/images";
import { Museum_pres_2 } from "../../assets/images";
// import { Museum_pres_3 } from "../../assets/images";
import SimpleSlider from "../Slider";

function Info() {
    const images =
        [
            { src: Museum_pres_1, },
            { src: Museum_pres_2, },
            // { src: Museum_pres_3, },
        ]


    return (
        <div className="flex">
            <li className=" w-sm w-full items-center rounded content-center">
                <SimpleSlider images={images} />
            </li>
            <div class="p-2 text-center text-2xl text-lg text-gray-700 shadow-lg">
                <div>
                    El museo ofrece visitas dirigidas, recorridos especializados, adiestramientos, conferencias, asesorías, talleres y círculos de interés.
                </div>
                <div>
                    <div className=" w-20 mx-auto pt-3 text-center  text-blue-700 ">Horarios:</div>
                    <div>
                        De martes a sábado de 9:30 a.m. a  5:00 p.m.
                    </div>
                    <div>
                        Domingo: 9:00 a.m. a 1:00 p.m.
                    </div>
                </div>
                <div>
                    <div className=" w-full mx-auto pt-3 text-center  text-blue-700 ">Vías de contacto:</div>

                    (53) 7801 74 69 / tony@patrimonio.ohc.cu
                </div>
                <div>
                    <div className=" w-20 mx-auto pt-3 text-center text-blue-700 ">Entrada: </div>

                    Visitantes nacionales 2.00 CUP / Visitantes extranjeros 2.00 CUC.
                </div>
            </div>


        </div>
    );
}

export default Info