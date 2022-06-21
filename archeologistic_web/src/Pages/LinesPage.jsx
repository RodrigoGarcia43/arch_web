import React from "react"
import { Link } from "react-router"
import { MainIcon } from "../assets/icons";
import { GabIcon } from "../assets/icons";
import Lines from "../Components/Lines/Lines"





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
                    <Lines />
                </div>
            </div>
        </div>
    );
}
