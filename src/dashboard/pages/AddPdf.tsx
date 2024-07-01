import { useState } from 'react';
import { Upload } from 'lucide-react';
import Modal from 'react-modal';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the worker path for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function AddPdf() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please upload a valid PDF file.');
      setFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      setModalIsOpen(true);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className='grid place-items-center min-h-screen bg-gray-100'>
      <div className="bg-white shadow-lg rounded-lg w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-t-lg"
          />
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Upload Files</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              className="file-input mb-4"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="btn btn-primary flex items-center">
              <Upload className="mr-2" /> Upload
            </button>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="PDF Preview"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg p-4 w-3/4 h-3/4 overflow-auto">
          <button
            onClick={() => setModalIsOpen(false)}
            className="btn btn-secondary mb-4"
          >
            Close
          </button>
          {file && (
            <div className="pdf-viewer">
              <Document
                file={URL.createObjectURL(file)}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              {numPages > 1 && (
                <div className="flex justify-between">
                  <button
                    onClick={() => setPageNumber(pageNumber - 1)}
                    disabled={pageNumber <= 1}
                    className="btn btn-secondary"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPageNumber(pageNumber + 1)}
                    disabled={pageNumber >= numPages}
                    className="btn btn-secondary"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default AddPdf;
