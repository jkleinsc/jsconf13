var fileSystem, size = 1024*1024; //1MB

function handleError(errorEvent) { 
    //Async error handler
    console.log('Error with filesystem API');
}

function openFileSystem() {
    window.requestFileSystem(PERSISTENT, size, handleOpenFileSystem, handleError);
}

function handleOpenFileSystem(newFileSystem) {
    fileSystem = newFileSystem;
    var fileToSave = document.querySelector('#fileinput').files[0];
    fileSystem.root.getFile(fileToSave.name, {create: true, exclusive: true}, function(fileEntry) {        
        fileEntry.createWriter(function(fileWriter) {
            fileWriter.write(fileToSave);
            console.log("file available at:"+fileEntry.toURL());
        }, handleError);
    }, handleError);
    
}

window.webkitStorageInfo.requestQuota(PERSISTENT, size, openFileSystem, handleError);        


function getFileAsDataURL(fileSystem) {
  //First get the file entry representing the call (async response)
  fileSystem.root.getFile('lol_cat.jpg', {}, function(fileEntry) {
    //Next get the actual file (async response)      
    fileEntry.file(function(fileToRead) {
        //Next read the file as dataURL(async response)      
       var reader = new FileReader();
       reader.onloadend = function(readerEvent) {           
         var dataURL = readerEvent.target.result;         
       };
       reader.readAsDataURL(fileToRead);
    }, handleError);
  }, handleError);

}

window.requestFileSystem(PERSISTENT, size, getFileAsDataURL, handleError);


        

        