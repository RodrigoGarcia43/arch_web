import React from "react"
import httpClient from "../../httpClient";


export default class AddCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ name: event.target.value })
    }

    handleSubmit(event) {
        let params = {
            Id: this.state.name + this.props.fatherId,
            Name: this.state.name,
            FatherId: this.props.fatherId,
        }

        this.setState({ name: '' })

        httpClient.post("/catalog", params);

        alert('Añadido catalogo: ' + this.state.name)
        event.preventDefault();
    }

    render() {

        return (
            <div className="flex w-full h-full py-24 justify-center">

                <div className=" w-1/2 h-1/2  bg-white rounded shadow-lg p-8 m-4 md-max-w-sm md:mx-aut " >

                    <form action="" className=" mb-4 flex flex-wrap justify-between">

                        <h3 className="text-2xl text-gray-900 font-semibold">Agrega un catálogo</h3>
                        <p className="text-gray-600 w-full"> Este subcatálogo será agregado a {this.props.fatherName}</p>

                        <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Nombre del catálogo" className="border p-2 w-full mt-3"></input>

                        <div className="flex w-full p-4 mx-auto ">
                            <button className=" mx-auto text-lg w-1/3 p-4 block rounded mt-6 bg-black hover:bg-blue-900 text-white font-semibold uppercase " type="submit" onClick={this.handleSubmit}>
                                Agregar
                        </button>

                            <button className=" mx-auto text-lg w-1/3 p-4 block rounded mt-6 bg-black hover:bg-green-900 text-white font-semibold uppercase " onClick={() => { this.props.handleStat(0) }}>
                                Regresar
                        </button>
                        </div>
                    </form>

                </div>
            </div>





        );
    }
}