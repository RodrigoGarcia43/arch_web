import React from "react";

import Institutuion from "../Components/Institution/Institution"
import Museum from "../Components/Museum/Museum"
import Library from "../Components/Library"
import { Link } from "react-router"
import { MainIcon } from "../assets/icons";
import { GabIcon } from "../assets/icons";
import SimpleMenu from "../Components/SimpleMenu"
import LinksMenu from "../Components/LinksMenu"



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actual: 1,
    };
  }

  render() {
    const active_item = "text-center block border border-gray-500 rounded py-2 px-4 bg-black hover:bg-gray-700 text-white"
    const inactive_item = "text-center block border border-gray-400 rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"

    let content;
    if (this.state.actual === 1) {
      content = <Institutuion />
    }
    else if (this.state.actual === 2) {
      content = <Museum />
    }
    else if (this.state.actual === 3) {
      content = <Library />
    }

    return (
      <div className="bg-fixed" style={{ backgroundColor: "#DCD8A7" }}>


        <nav className="-mb-px bg-green-900 flex justify-between px-8 pt-2 py-2 shadow-md">
          <Link to="/">
            <MainIcon className="h-12 w-10 " />
          </Link>
          <GabIcon className="h-12 w-full" />
          <SimpleMenu />

        </nav>


        <div>
          <div className="bg-green-700">

            <div className="flex -mb-px items-center justify-between px-4 py-2">

              <ul className="flex">
                <li className="flex-2 mr-2">
                  <button className={this.state.actual === 1 ? active_item : inactive_item} onClick={() => this.setState({ actual: 1 })} >
                    Institución
              </button>
                </li>
                <li className="flex-2 mr-2">
                  <button className={this.state.actual === 2 ? active_item : inactive_item} onClick={() => this.setState({ actual: 2 })}>
                    Museo de Arqueología
              </button>
                </li>
                <li className="flex-2 mr-2">
                  <button className={this.state.actual === 3 ? active_item : inactive_item} onClick={() => this.setState({ actual: 3 })}>
                    Biblioteca
              </button>
                </li>

              </ul>
              <>
                <LinksMenu />
              </>


            </div>
          </div>
        </div>

        <div className="w-full py-20 "  >
          {content}
        </div>

      </div >
    )
  };
}
