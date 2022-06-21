import React from "react"
import Info from "./Info"
import Presentation from "./Presentation"
import Team from "./Team"

import Aboriginal from "./Rooms/Aboriginal"
import Ceramics from "./Rooms/Ceramics"
import Colonial from "./Rooms/Colonial"
import Conservation from "./Rooms/Conservation"
import Ecuador from "./Rooms/Ecuador"
import Glass from "./Rooms/Glass"
import Peru from "./Rooms/Peru"
import Tiles from "./Rooms/Tiles"
import Toys from "./Rooms/Toys"

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HelpIcon from '@material-ui/icons/Help';

class Museum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actual: 1,
        };
    }

    render() {
        const active_item = "inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
        const inactive_item = "inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
        let content;
        if (this.state.actual === 1) {
            content = <Presentation />
        }
        if (this.state.actual === 2) {
            content = <Info />
        }
        if (this.state.actual === 3) {
            content = <Aboriginal />
        }
        if (this.state.actual === 4) {
            content = <Ceramics />
        }
        if (this.state.actual === 5) {
            content = <Colonial />
        }
        if (this.state.actual === 6) {
            content = <Conservation />
        }
        if (this.state.actual === 7) {
            content = <Ecuador />
        }
        if (this.state.actual === 8) {
            content = <Glass />
        }
        if (this.state.actual === 9) {
            content = <Peru />
        }
        if (this.state.actual === 10) {
            content = <Tiles />
        }
        if (this.state.actual === 11) {
            content = <Toys />
        }
        if (this.state.actual === 12) {
            content = <Team />
        }



        return (
            <>


                <div className="px-20 py-4">
                    <div className="-mb-px  flex justify-between px-8 pt-2 py-2 shadow-md">
                        <button className={this.state.actual === 12 ? active_item : inactive_item} onClick={() => this.setState({ actual: 12 })}><EmojiPeopleIcon /></button>
                        <div className=" w-49 mx-auto pt-3 border-b-2 border-gray-500 text-center text-4xl text-blue-700 ">Museo Arqeuológico</div>
                        <button className={this.state.actual === 2 ? active_item : inactive_item} onClick={() => this.setState({ actual: 2 })}><HelpIcon /></button>
                    </div>
                    <ul className="flex justify-center py-4">

                        <li className="mr-3">
                            <button className={this.state.actual === 3 ? active_item : inactive_item} onClick={() => this.setState({ actual: 3 })}>Comunidades Aborígenes de Cuba</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 4 ? active_item : inactive_item} onClick={() => this.setState({ actual: 4 })}>Cerámicas arqueológicas inglesas en La Habana </button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 5 ? active_item : inactive_item} onClick={() => this.setState({ actual: 5 })}>Arqueología Colonial </button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 6 ? active_item : inactive_item} onClick={() => this.setState({ actual: 6 })}>Conservación, Restauración y Museología</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 7 ? active_item : inactive_item} onClick={() => this.setState({ actual: 7 })}>Mesoamérica y Ecuador</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 8 ? active_item : inactive_item} onClick={() => this.setState({ actual: 8 })}> Vidrio arqueológico </button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 9 ? active_item : inactive_item} onClick={() => this.setState({ actual: 9 })}>Perú prehispánico</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 10 ? active_item : inactive_item} onClick={() => this.setState({ actual: 10 })}>Azulejos estilo Delft</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 11 ? active_item : inactive_item} onClick={() => this.setState({ actual: 11 })}>Juguetes y pequeñas fabricaciones de cerámica </button>
                        </li>


                    </ul>
                    {content}

                </div>
            </>
        );
    }
}

export default Museum;