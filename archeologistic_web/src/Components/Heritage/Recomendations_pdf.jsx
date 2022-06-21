import apre from "../../assets/anex/Gestión del Patrimonio Arqueológico/Recomendaciones Apre.pdf";
import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDFApre extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file={apre}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>


                <a href={apre} target="_blank" rel="noopener noreferrer" download>
                    <button>
                        <i className="fas fa-download" />
                        Descargar PDF
                    </button>
                </a>

            </div>
        );
    }
}

export default PDFApre