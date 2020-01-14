import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // installed from "../src/react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDF_URL = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';

export default class MyPDF extends Component {
  render() {
    return (
      <Document file={PDF_URL}>
        <Page pageNumber={1} />
      </Document>
    );
  }
}
