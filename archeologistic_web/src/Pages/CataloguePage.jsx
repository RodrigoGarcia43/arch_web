import React from "react"
import AddCat from "../Components/Catalogue/AddCat"
import AddItem from "../Components/Catalogue/AddItem"
import EditItem from "../Components/Catalogue/EditItem"
import { Link } from "react-router"
import { MainIcon } from "../assets/icons";
import { GabIcon } from "../assets/icons";
import SimpleMenuCat from "../Components/SimpleMenuCat"
import Item from "../Components/Catalogue/ItemCard"
import httpClient from "../httpClient";
import { useState } from "react";
import { useEffect } from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PageviewIcon from '@material-ui/icons/Pageview';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



export default function CataloguePage() {
    const [user, setUser] = useState(null);
    const [catalogs, setCatalogs] = useState([]);
    const [fatherId, setFatherId] = useState(null);
    const [fatherName, setFatherName] = useState(null);
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(0);
    const [actualName, setActualName] = useState(null);
    const [selectedItem, setSelectedItem] = useState({ name: "", catalogId: "", findingDateY: 0, findingDateM: 0, findingDateD: 0, originDateY: 0, originDateM: 0, originDateD: 0, findingPlace: "", description: "" });
    const [actualId, setActualId] = useState("root");
    const [search, setSearch] = useState("");
    const [del, setDel] = useState(0);
    const [toEdit, setToEdit] = useState(null);



    async function getItem(itemId) {

        let data = await httpClient.get("/item/" + itemId);

        setSelectedItem(data.data)

        return (data.data)
    }

    async function getCatById(catId) {

        let data = await httpClient.get("/Catalog/" + catId);

        return data.data;
    }

    async function deleteCat(catId) {
        await httpClient.delete("/Catalog/" + catId)
        setDel(del + 1);
    }

    async function deleteItem(catId) {
        await httpClient.delete("/item/" + catId)
        setDel(del + 1);
    }

    async function selectEdit(itemId) {
        const it = await getItem(itemId);

        setToEdit(it);

        setStatus(3);
    }

    useEffect(() => {

        async function getCats() {
            let data = await httpClient.get("/Catalog/" + actualId);


            if (data.data === "" && actualId === "root") {

                const params = {
                    Id: "root",
                    Name: "Raíz",
                    FatherId: null,
                }

                await httpClient.post("/Catalog/", params);


                data = await httpClient.get("/Catalog/" + actualId);
            }

            setActualName(data.data.name)
            setCatalogs(data.data.innerCatalogs)
            setItems(data.data.items)
            setFatherId(data.data.father.id)
            setFatherName(data.data.father.name)
            setSelectedItem({ name: "", catalogId: "", findingDateY: 0, findingDateM: 0, findingDateD: 0, originDateY: 0, originDateM: 0, originDateD: 0, findingPlace: "", description: "" })
        }
        if (actualId !== "@search") {
            getCats();

        }
    }, [actualId, status, del]);

    function handleStat(s) {
        setStatus(s);
    }

    function selectCat(catId) {
        setActualId(catId);
    }

    function back() {
        if (actualId !== "root") {
            selectCat(fatherId)
        }
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser);
        }
    }, [])

    async function find(name, searchItems, searchCats) {

        let it = [];
        for (let i = 0; i < searchItems.length; i++) {

            if (searchItems[i].name.includes(name)) {
                it.push(searchItems[i]);
            }
        }
        let cats = [];
        for (let i = 0; i < searchCats.length; i++) {

            if (searchCats[i].name.includes(name)) {
                cats.push(searchCats[i]);
            }

            const newSearch = await getCatById(searchCats[i].id)

            const deepStep = await find(name, newSearch.items, newSearch.innerCatalogs)


            for (let j = 0; j < deepStep.it.length; j++) {
                it.push(deepStep.it[j])
            }
            for (let j = 0; j < deepStep.cats.length; j++) {
                cats.push(deepStep.cats[j])
            }
        }

        return { it, cats };
    }

    async function searchByName(name) {
        setSearch("");

        const elements = await find(name, items, catalogs)



        setActualName("Búsqueda de: " + name)
        setCatalogs(elements.cats)
        setItems(elements.it)
        setFatherId(actualId)
        setFatherName(actualName)
        setActualId("@search")
    }

    function handleChangeSearch(event) {
        setSearch(event)
    }

    const ser = <div className="flex py-4">
        <button onClick={() => searchByName(search)} className="h-1/2 text-lg w-1/6  rounded  bg-black hover:bg-gray-900 text-white font-semibold uppercase " >
            <PageviewIcon color="secundary" fontSize="small" />
        </button>
        <input type="text" value={search} onChange={event => handleChangeSearch(event.target.value)} placeholder="Buscar"
            className="w-4/5 my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none" />

    </div>

    let _ser;
    if (actualId !== "@search") {
        _ser = ser
    }
    else {
        _ser = <div />
    }

    let _cat;
    if (user) {
        _cat =
            <div className="w-full">

                {
                    catalogs &&
                    catalogs.map((cat) => (
                        <div className="w-full flex">

                            <button onClick={() => selectCat(cat.id)} className="w-5/6 contetn-left flex cursor-pointer my-1 hover:bg-blue-lightest rounded" key={cat.id}>
                                <div className="w-8 h-10 text-LEFT py-1">
                                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                                </div>
                                <div className="w-4/5 h-auto py-3 px-1">
                                    <p type="textButton" className="hover:text-blue-dark">{cat.name}</p>
                                </div>

                            </button>
                            <button className=" w-1/6 h-auto flex justify-center" onClick={() => deleteCat(cat.id)} >
                                <div className="w-1/2 rounded align-right bg-white hover:bg-gray-900 text-black text-center" >
                                    <DeleteIcon color="secundary" fontSize="small" />
                                </div>

                            </button>
                        </div>
                    ))
                }
            </div>





    }
    else {
        _cat =
            <div className="w-full">
                {
                    catalogs &&
                    catalogs.map((cat) => (
                        <div>

                            <button onClick={() => selectCat(cat.id)} className=" flex cursor-pointer my-1 hover:bg-blue-lightest rounded" key={cat.id}>
                                <div className="w-8 h-10 text-LEFT py-1">
                                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                                </div>
                                <div className="w-full h-auto py-3 px-1">
                                    <p type="textButton" className="hover:text-blue-dark">{cat.name}</p>
                                </div>
                            </button>
                        </div>
                    ))
                }
            </div>


    }

    let _it;
    if (user) {
        _it =
            <div className="w-full">

                {
                    items &&
                    items.map((it) => (
                        <div className="w-full flex">

                            <button onClick={() => { getItem(it.id) }} className="w-5/6 contetn-left flex cursor-pointer my-1 hover:bg-blue-lightest rounded" key={it.id}>
                                <div className="w-8 h-10 text-LEFT py-1">
                                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                                </div>
                                <div className="w-4/5 h-auto py-3 px-1">
                                    <p type="textButton" className="hover:text-blue-dark">{it.name}</p>
                                </div>

                            </button>
                            <button className=" w-1/6 h-auto flex justify-center" onClick={() => { selectEdit(it.id) }} >
                                <div className="w-1/2 rounded align-right bg-white hover:bg-gray-900 text-black text-center" >
                                    <EditIcon color="secundary" fontSize="small" />
                                </div>
                            </button>
                            <button className=" w-1/6 h-auto flex justify-center" onClick={() => deleteItem(it.id)} >
                                <div className="w-1/2 rounded align-right bg-white hover:bg-gray-900 text-black text-center" >
                                    <DeleteIcon color="secundary" fontSize="small" />
                                </div>
                            </button>

                        </div>
                    ))
                }
            </div>





    }
    else {
        _it =
            <div className="w-full">
                {
                    items &&
                    items.map((it) => (
                        <div>

                            <button onClick={() => { getItem(it.id) }} className=" flex cursor-pointer my-1 hover:bg-blue-lightest rounded" key={it.id}>
                                <div className="w-8 h-10 text-LEFT py-1">
                                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                                </div>
                                <div className="w-full h-auto py-3 px-1">
                                    <p type="textButton" className="hover:text-blue-dark">{it.name}</p>
                                </div>
                            </button>
                        </div>
                    ))
                }
            </div>


    }

    const cat = <div className=" h-full py-6  p-6 w-full">
        <div className="relative rounded  border border-grey-light mb-8 bg-white w-full">
            <div className="border-b border-grey-light p-4 bg-grey-lighter py-8 w-full">
                <div className="bg-white mx-auto  shadow-lg rounded-lg  w-full">
                    <div className="sm:flex sm:items-left px-2 py-4 w-full">
                        <div className="flex-grow w-full">
                            {_ser}
                            <div className="flex">
                                <h3 className="overflow-auto font-normal w-4/5 px-2 py-3 leading-tight">{actualName}</h3>
                                <button onClick={back} className=" h-1/2 text-lg w-1/6  rounded  bg-black hover:bg-gray-900 text-white font-semibold uppercase " >
                                    <ArrowBackIcon color="secundary" fontSize="small" />
                                </button>
                            </div>



                            <div className="w-full">
                                <div className="w-1/5 h-10 text-left p-3">
                                    <p type="text" className="text-sm text-grey-dark">Subcatálogos:</p>
                                </div>

                                {_cat}

                            </div>
                            <div className="w-full">
                                <div className="w-1/5 h-10 text-left p-3">
                                    <p className="text-sm text-grey-dark">Objetos:</p>
                                </div>
                                {
                                    _it
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    let content;
    if (status === 0) {
        content =
            (
                <div className="flex  w-full">
                    <div className="-mb-px w-1/2 justify-between px-4 py-2">
                        {cat}
                    </div>
                    <div className="h-screen h-full w-1/2 px-4 py-4 justify-between">
                        {<Item item={selectedItem} />}
                    </div>
                </div>
            );
    }
    if (status === 1) {
        content = <AddCat fatherId={actualId === "@search" ? fatherId : actualId} fatherName={actualId === "@search" ? fatherName : actualName} handleStat={(s) => handleStat(s)} />
    }

    if (status === 2) {
        content = <AddItem fatherId={actualId === "@search" ? fatherId : actualId} fatherName={actualId === "@search" ? fatherName : actualName} handleStat={(s) => handleStat(s)} />
    }

    if (status === 3) {
        content = <EditItem item={toEdit} fatherId={actualId === "@search" ? fatherId : actualId} fatherName={actualId === "@search" ? fatherName : actualName} handleStat={(s) => handleStat(s)} />
    }

    return (

        <div className="w-full h-screen" >
            <nav className="-mb-px bg-green-900 flex justify-between px-8 pt-2 py-2 shadow-md">
                <Link to="/">
                    <MainIcon className="h-12 w-10 " />
                </Link>
                <GabIcon className="h-12 w-full" />
                <SimpleMenuCat handleStat={(s) => handleStat(s)} />

            </nav>

            <div className="w-full h-full" >
                <div className="flex w-full h-auto min-h-screen" style={{ backgroundColor: "#DCD8A7" }}>
                    {content}
                </div>
            </div>

        </div>
    );
}
