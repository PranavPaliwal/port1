document.addEventListener('DOMContentLoaded', function() {
    const pdfApp = document.getElementById('pdf-app');
    
    pdfApp.addEventListener('click', function() {
        // Assuming the PDF file is in a directory called 'assets' in the same directory as your HTML file
        const resumeUrl = './assets/gettingPlaced.pdf';
        
        // Open the PDF in a new tab
        window.open(resumeUrl, '_blank');
        
        // Alternatively, if you want to open it in the same window, use:
        // window.location.href = resumeUrl;
    });
});