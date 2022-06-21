import React from "react"
import httpClient from "../../httpClient";
import { useState } from "react";

export default function AddItem(props) {

    const [fdateY, setFdateY] = useState(props.item.findingDateY);
    const [fdateM, setFdateM] = useState(props.item.findingDateM);
    const [fdateD, setFdateD] = useState(props.item.findingDateD);

    const [fplace, setFplace] = useState(props.item.findingPlace);

    const [odateY, setOdateY] = useState(props.item.findingDateY);
    const [odateM, setOdateM] = useState(props.item.findingDateM);
    const [odateD, setOdateD] = useState(props.item.findingDateD);
    const [image, setImage] = useState(props.item.image);

    const [descr, setDescr] = useState(props.item.description);
    console.log(props.item)


    function handleChangeFDateY(event) {
        setFdateY(parseInt(event.target.value, 10))
    }
    function handleChangeFDateM(event) {
        setFdateM(parseInt(event.target.value, 10))
    }
    function handleChangeFDateD(event) {
        setFdateD(parseInt(event.target.value, 10))
    }
    function handleChangeFPlace(event) {
        setFplace(event.target.value)
    }
    function handleChangeODateY(event) {
        setOdateY(parseInt(event.target.value, 10))
    }
    function handleChangeODateM(event) {
        setOdateM(parseInt(event.target.value, 10))
    }
    function handleChangeODateD(event) {
        setOdateD(parseInt(event.target.value, 10))
    }
    function handleChangeDescr(event) {
        setDescr(event.target.value)
    }

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);



    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
            current.src = e.target.result;
            resolve(reader.result)
        };
        reader.onerror = error => reject(error);

    })




    async function handleImageUpload(e) {
        const [file] = e.target.files;

        if (file) {
            setImage(await toBase64(file))

        }
    };

    function handleSubmit(event) {
        const params = {
            Id: props.item.id,
            Name: props.item.name,
            FindingDateY: fdateY,
            FindingDateM: fdateM,
            FindingDateD: fdateD,

            FindingPlace: fplace,

            OriginDateY: odateY,
            OriginDateM: odateM,
            OriginDateD: odateD,

            Description: descr,
            CatalogId: props.fatherId,
            Image: image
        }




        httpClient.put("/item/" + params.Id, params);

        alert('Editado objeto: ' + params.Name)
        event.preventDefault();


    }

    const father = props.fatherName

    return (
        <div className="flex h-full w-full " style={{ backgroundColor: "#DCD8A7" }}>

            <form className="w-1/35 h-screen bg-white rounded shadow-lg p-8 m-4 md-max-w-sm md:mx-aut ">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={imageUploader}
                        style={{
                            display: "none"
                        }}
                    />
                    <div
                        style={{
                            height: "400px",
                            width: "400px",
                            border: "3px dashed black"
                        }}
                        onClick={() => imageUploader.current.click()}
                    >
                        <img alt=""
                            ref={uploadedImage}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "acsolute"
                            }}
                        />
                    </div>


                </div>
                <div className=" block flex w-full p-4 mx-auto ">
                    <div className="text-center mx-auto text-lg w-full p-4 block rounded mt-6 bg-black  text-white font-semibold uppercase " >
                        Toca en el cuadro para subir una nueva foto
                        </div>
                </div>
            </form>

            <div className=" w-1/75 bg-white rounded shadow-lg p-8 m-4 md-max-w-sm md:mx-aut " >

                <form action="" className=" mb-4 flex flex-wrap justify-between">

                    <h3 className="text-2xl text-gray-900 font-semibold">Agrega un Objeto</h3>
                    <p className="text-gray-600 w-full"> Este Objeto será agregado a {father}</p>

                    <input type="text" value={props.item.name} placeholder="Nombre del Objeto" className="border p-2 w-full mt-3"></input>

                    <input type="number" step="1" value={fdateY} onChange={handleChangeFDateY} placeholder="Año de Hallazgo" className=" border px-3 py-2 p-2 w-1/35  mt-3"></input>
                    <input type="number" step="1" value={fdateM} onChange={handleChangeFDateM} placeholder="Mes de Hallazgo" className=" border px-3 py-2 p-2 w-1/35  mt-3"></input>
                    <input type="number" step="1" value={fdateD} onChange={handleChangeFDateD} placeholder="Día de Hallazgo" className=" border px-3 py-2 p-2 w-1/35  mt-3"></input>

                    <input type="text" value={fplace} onChange={handleChangeFPlace} placeholder="Lugar de Hallazgo" className="border p-2 w-full mt-3"></input>

                    <input type="number" step="1" value={odateY} onChange={handleChangeODateY} placeholder="Año de Origen" className=" border px-3 py-2 p-2 w-1/35  mt-3"></input>
                    <input type="number" step="1" value={odateM} onChange={handleChangeODateM} placeholder="Mes de Origen" className=" border px-3 py-2 p-2 w-1/35  mt-3"></input>
                    <input type="number" step="1" value={odateD} onChange={handleChangeODateD} placeholder="Día de Origen" className=" border px-3 py-2 p-2 w-1/35  mt-3"></input>

                    <textarea type="text" rows="5" value={descr} onChange={handleChangeDescr} placeholder="Descripción" className="border p-2 w-full mt-3"></textarea>

                    <div className="flex w-full p-4 mx-auto ">
                        <button className=" mx-auto text-lg w-1/3 p-4 block rounded mt-6 bg-black hover:bg-blue-900 text-white font-semibold uppercase " type="submit" onClick={handleSubmit}>
                            Modificar
                        </button>

                        <button className=" mx-auto text-lg w-1/3 p-4 block rounded mt-6 bg-black hover:bg-green-900 text-white font-semibold uppercase " onClick={() => { props.handleStat(0) }}>
                            Regresar
                        </button>
                    </div>
                </form>

            </div>
        </div>


    );
}
