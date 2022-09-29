document.addEventListener("DOMContentLoaded", function() {

    const submitTambah = document.getElementById("inputBook");
    
    submitTambah.addEventListener("submit", function(event) {
        event.preventDefault(); 
        tambahBuku();
    });


    if( cekStorage() ) {
        loadDataFromStorage();
    }

});



document.addEventListener("datadisimpan", () => {
    console.log('Data berhasil disimpan!');
});

document.addEventListener("dataloaded", () => {
    refreshDataFromBooks();
});
