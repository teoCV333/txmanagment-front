import React from 'react';
import { jsPDF } from 'jspdf';
import { Document, Page } from 'react-pdf';

function PDFExtract() {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [pdfDataUri, setPdfDataUri] = React.useState(null);

    React.useEffect(() => {
        // Create a jsPDF instance
        const doc = new jsPDF();
        doc.text("Hello world!", 10, 10);
        doc.save("test");

        // Get the PDF as a data URI
        const dataUri = doc.output('pdf-extracts/test');
        setPdfDataUri(dataUri);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
      {pdfDataUri && (
        <Document file={{ data: pdfDataUri }} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      )}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
    );
}

export { PDFExtract };