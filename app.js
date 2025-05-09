// // Importing express from the express package;
import express from "express";


// // Creating instance;
const app = express();

/**
 * app - This variable holds the created Express app, which you can use to;
 
 * Define routes (app.get(), app.post(), etc.,);

 * Configure middleware (app.use());

 * Start the server (app.listen());
 * 
 */

const PORT = 1915;

app.get("/", (request, response) => {
    response.send("Hello World");
    // // In browser open the Network tab;
    // // You are able to see the following things now;
    // // localhost with status of 304;
    // // Click on that you will move enter; 
    /**
     * * General 
     *  Request URL:        http://localhost:1915/
        Request Method:     GET
        Status Code:        304 Not Modified
        Remote Address:     [::1]:1915
        Referrer Policy:    strict-origin-when-cross-origin

     * * Response Headers 
     *  connection:         keep-alive
        date:               Fri, 09 May 2025 08:38:34 GMT
        etag:               W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
        keep-alive:         timeout=5
        x-powered-by:       Express
     
     * 
     */
});


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

// // // Open the terminal and write down the following commands to run/start the server :-
// // // Firstly, clear all the things and ls to check the folder;
// // // Secondly, node --watch app.js to start the server;
// // // Finally, your server started :- Server running at 1915;
// // // Now, open the browser and in url write localhost:1915
// // // You will get the result on the display as :- Hello World