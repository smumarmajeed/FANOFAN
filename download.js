document.getElementById('downloadBtn').addEventListener('click', () => {
    // Load jsPDF
    const { jsPDF } = window.jspdf;

    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Add some text to the PDF
    doc.text("Hello world!", 10, 10);
    doc.text("This is a sample PDF document.", 10, 20);

    // Save the PDF
    doc.save('sample-document.pdf');
});
