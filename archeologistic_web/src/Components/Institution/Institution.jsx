import React from "react";
import Presentation from "./Presentation"
import History from "./History"
import Team from "./Team"

class Institution extends React.Component {
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
        else if (this.state.actual === 2) {
            content = <History />
        }
        else if (this.state.actual === 3) {
            content = <Team />
        }


        return (
            <>


                <div className="px-20 py-4">
                    <div className="flex-2 mr-2">
                        <div className=" w-49 mx-auto pt-3 border-b-2 border-gray-500 text-center text-4xl text-blue-700 ">Gabinete de Arqueología</div>
                    </div>
                    <ul className="flex justify-center py-4">

                        <li className="mr-3">
                            <button className={this.state.actual === 1 ? active_item : inactive_item} onClick={() => this.setState({ actual: 1 })}>Presentación</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 2 ? active_item : inactive_item} onClick={() => this.setState({ actual: 2 })}>Historia</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 3 ? active_item : inactive_item} onClick={() => this.setState({ actual: 3 })}>Equipo</button>
                        </li>

                    </ul>
                    {content}

                </div>
            </>
        );
    }
}

export default Institution;