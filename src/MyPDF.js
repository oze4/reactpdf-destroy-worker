import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // installed from "../src/react-pdf-test"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDF_URL = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';


export default class MyPDF extends Component {
  componentWillUnmount = event => {
    console.log('unmounted');
  }
  
  onDocumentLoadSuccess = pdf => {
    console.log(pdf);
  }

  render() {
    return (
      <Document file={PDF_URL} onLoadSuccess={this.onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
    );
  }
}