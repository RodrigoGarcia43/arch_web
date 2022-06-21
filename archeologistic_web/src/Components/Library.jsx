import React from "react";

class Institution extends React.Component {
    render() {

        return (
            <>


                <div className="px-20 py-4">
                    <div className="flex-2 mr-2">
                        <div className=" w-49 mx-auto pt-3 border-b-2 border-gray-500 text-center text-4xl text-blue-700 ">Biblioteca</div>
                    </div>

                    <div class="p-2 text-center text-2xl text-lg text-gray-700">
                        Establecida desde 1987, desde la fundación del Gabinete de Arqueología, la Biblioteca tiene su sede en el número 4 de la calle Tacón, entre O´Reilly y Empedrado. Se especializa en temas de Arqueología, principalmente cubana; aunque posee un fondo mucho más amplio que abarca documentos y publicaciones de Historia a diferentes niveles -universal, nacional y local-, Historia del Arte, Arquitectura, Etnología, Antropología, Historia Natural y otras materias relacionadas con los estudios arqueológicos.
                        Promueve vínculos para el intercambio de publicaciones especializadas con otras instituciones, tanto nacionales como extranjeras. Los servicios de consulta y referencia se ofrecen de lunes a viernes, de  8:30 am a 5:00 pm.
                    </div>

                    <div className="flex-2 mr-2">
                        <div className=" w-49 mx-auto pt-3  text-center text-2xl text-blue-700 ">Colecciones</div>
                    </div>

                    <div class="p-2 text-center text-2xl text-lg text-gray-700">
                        El repertorio documental de la Biblioteca está ordenado en seis colecciones:
                        1-  General: Libros de temática arqueológica, histórica y ciencias naturales.
                        2-  Obras de Referencia: Repertorios factográficos de consulta rápida y constante,   entre los que se incluyen enciclopedias, diccionarios, índices, anuarios, bibliografías, etc.
                        3-  Hemeroteca: Colección de publicaciones seriadas y periódicas.
                        4-  Rara: Documentos muy antiguos, escasos o con valores agregados importantes.
                        5- Rivero de la Calle: Libros y documentos que pertenecieran al reconocido antropólogo Dr. Manuel Rivero de la Calle.
                        6- Boloña: Libros publicados por la editorial homónima, distribuidos en todas las bibliotecas especializadas de la Oficina del Historiador de La Habana. Se encuentran títulos de variadas temáticas, aunque no se relacionen directamente con  Arqueología.
                        La Biblioteca posee además una Colección Digital que contiene un gran número de textos e investigaciones de diverso carácter, afines a la disciplina arqueológica.</div>
                </div>

                <div className="flex-2 mr-2">
                    <div className=" w-49 mx-auto pt-3 text-center text-2xl text-blue-700 ">Novedades</div>
                </div>
            </>
        );
    }
}

export default Institution;