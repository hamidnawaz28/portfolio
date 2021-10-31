import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 40,
    display: "flex",
    justifyContent: "center",
  },
}));

const PV = ({ url }: any) => {
  const { root } = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <div className={root}>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
        <Page pageNumber={3} />
      </Document>
    </div>
  );
};
export default PV;
