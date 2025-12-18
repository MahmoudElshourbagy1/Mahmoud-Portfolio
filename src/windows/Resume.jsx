import React, { useState } from 'react';
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {ChevronLeft, ChevronRight, Download} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
    const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages));

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>
                <a href="/files/Mahmoud_shrife_FullStack_DotNet_Angular_Next_cv.pdf" download className="cursor-pointer" title="Download resume">
                    <Download className="icon" />
                </a>
            </div>

            <Document
                file="/files/Mahmoud_shrife_FullStack_DotNet_Angular_Next_cv.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>

            {numPages && (
                <div
                    className="page-controls"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "10px 0",
                        gap: "10px",
                    }}
                >
                    <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                        <ChevronLeft size={20} />
                    </button>
                    <span>Page {pageNumber} of {numPages}</span>
                    <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
