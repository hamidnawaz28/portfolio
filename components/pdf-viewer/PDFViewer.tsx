import { Box } from "@mui/material";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const rootStyle = () => {
  return {
    paddingTop: 40,
    display: "flex",
    justifyContent: "center",
  }
}
const PV = ({ url }: any) => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Box sx={rootStyle}>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
        <Page pageNumber={3} />
      </Document>
    </Box>
  );
};
export default PV;
