import React from "react"
import Presentation from "./Presentation"
import Industrial from "./Industrial"
import Prehispanic from "./Prehispanic"
import Subacuatic from "./Subacuatic"
import Urban from "./Urban"

class Lines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actual: 0,
        };
    }

    render() {
        const active_item = "inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
        const inactive_item = "inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
        let content;
        if (this.state.actual === 0) {
            content = <Presentation />
        }
        if (this.state.actual === 1) {
            content = <Industrial />
        }

        if (this.state.actual === 2) {
            content = <Prehispanic />
        }

        if (this.state.actual === 3) {
            content = <Subacuatic />
        }

        if (this.state.actual === 4) {
            content = <Urban />
        }


        return (
            <>
                <div className="px-20 py-4">
                    <li className="-mb-px  flex justify-between px-8 pt-2 py-2 shadow-md">
                        <div className=" w-49 mx-auto pt-3 border-b-2 border-gray-500 text-center text-4xl text-blue-700 ">Líneas de Investigación</div>
                    </li>
                    <ul className="flex justify-center py-4">

                        <li className="mr-1">
                            <button className={this.state.actual === 1 ? active_item : inactive_item} onClick={() => this.setState({ actual: 1 })}>Arqueología Urbana </button>
                        </li>
                        <li className="mr-2">
                            <button className={this.state.actual === 2 ? active_item : inactive_item} onClick={() => this.setState({ actual: 2 })}>Arqueología Subacuática</button>
                        </li>
                        <li className="mr-3">
                            <button className={this.state.actual === 3 ? active_item : inactive_item} onClick={() => this.setState({ actual: 3 })}>Arqueología Industrial</button>
                        </li>
                        <li className="mr-4">
                            <button className={this.state.actual === 4 ? active_item : inactive_item} onClick={() => this.setState({ actual: 4 })}>Arqueología Prehispánica</button>
                        </li>



                    </ul>

                    {content}

                </div>
            </>
        );
    }
}

export default Lines;