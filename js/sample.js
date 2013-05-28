window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
var myDB,
    dbVersion = 1,
    openRequest = window.indexedDB.open('MyDatabase', dbVersion);
openRequest.onerror = function(errorEvent) {
    console.log("openRequest failed");
    console.dir(errorEvent);
    //Async response, something didn't work
}
openRequest.onsuccess = function(successEvent) {
    console.log("Success opening");
    console.dir(successEvent);    
    //Async response, grab the database from the request.
    myDB = successEvent.target.result;
    doStuffAfterOpen();
}
openRequest.onupgradeneeded = function(upgradeEvent) {
    console.log("openRequest.onupgradeneeded ");    
  myDB = upgradeEvent.target.result;  
  //Create an object store in the DB
  var newObjectStore = myDB.createObjectStore('lolcats', { keyPath: 'id' });
}

function doStuffAfterOpen() {
    //This will only work after the async call to open the DB
    var transaction = myDB.transaction('lolcats','readwrite');
    var lolStore = transaction.objectStore('lolcats');
    var addRequest = lolStore.add({
    id: 'caturday',
    url: 'http://cheezburger.com/6677232128'
    });
    addRequest.onsuccess = function(successEvent) {
        //Async response, yes you can haz cheezburger
    };
    addRequest.onerror = function(errorEvent) {
        //Async response, no cheezburger for you
    };

    var getRequest = lolStore.get("caturday");
    getRequest.onsuccess = function(successEvent) {
    //Async response
    console.log("Funny kitty here" + request.result.url);
    };
    getRequest.onerror = function(errorEvent) {
        console.log("error on get");
        console.dir(errorEvent)
    //Async response, no funny kitties here
    };
}

