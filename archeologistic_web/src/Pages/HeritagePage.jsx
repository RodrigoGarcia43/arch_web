import React from "react"
import { Link } from "react-router"
import { MainIcon } from "../assets/icons";
import { GabIcon } from "../assets/icons";
// import PDFApre from "../Components/Heritage/Recomendations_pdf"


export default function CataloguePage() {

    return (


        <div className="bg-fixed" style={{ backgroundColor: "#DCD8A7" }}>
            <nav className="-mb-px bg-green-900 flex justify-between px-8 pt-2 py-2 shadow-md">
                <Link to="/">
                    <MainIcon className="h-12 w-10 " />
                </Link>
                <GabIcon className="h-12 w-full" />

            </nav>
            <div>
                <div className="w-full py-20 "  >


                    <div className="px-20 py-4">
                        <li className="-mb-px  flex justify-between px-8 pt-2 py-2 shadow-md">
                            <div className=" w-49 mx-auto pt-3 border-b-2 border-gray-500 text-center text-4xl text-blue-700 ">Gestión del patrimonio arqueológico</div>
                        </li>

                    </div>
                    <div className="p-2 text-left text-2xl text-lg text-gray-700 shadow-lg">
                        Se entiende por patrimonio arqueológico todo bien mueble e inmueble que haya quedado como huella de la existencia de grupos humanos pasados. Refiere lugares de asentamiento humano y vestigios de cualquier tipo de actividad humana, cuyo conocimiento sea alcanzable a través de metodología arqueológica y del uso de disciplinas afines. Comprende tanto los bienes que se encuentran en superficie, enterrados o bajo el mar.  Ante intervención urbanística, restauración o rehabilitación deben protegerse los bienes muebles e inmuebles que conforman el patrimonio arqueológico.<br />
                        El desarrollo de la Arqueología Histórica ha estado estrechamente vinculado a la obra rehabilitadora en los Centros Históricos cubanos. Esta disciplina se ha consolidado paulatinamente, y su praxis, conjuntamente con otras especialidades, ha demostrado su importancia en el estudio e interpretación de los conjuntos urbanos y sus problemáticas socioculturales.<br />
                        Con la creación en Cuba de Oficinas del Historiador y Conservador – y gabinetes adjuntos, destinados al trabajo en espacios urbanos con significación histórica- y la puesta en valor del patrimonio cultural en diversas provincias del país, la práctica arqueológica cobra auge y se sistematiza la investigación en las ciudades.<br />
                        La arqueología que se realiza en La Habana Vieja se ha orientado hacia la puesta en práctica de estrategias que contemplen la protección de los suelos arqueológicos dentro de los planes de gestión urbanística a partir de tres áreas fundamentales: la normativa, la evaluativa y la divulgativa. Particularmente, este tema es tratado desde la Arqueología Preventiva, especialidad que permite ordenar y gestionar con calidad el patrimonio arqueológico que se encuentra en suelos que son susceptibles de ser intervenidos por entidades constructivas<br />
                    </div>



                    <div className=" m-10" align="center">
                        {/* <PDFApre /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
