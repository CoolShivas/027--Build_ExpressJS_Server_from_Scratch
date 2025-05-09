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

// // // Formation of Home Page;
app.get("/", (request, response) => {
    // response.send("Hello World");
    // // // In browser open the Network tab;
    // // // You are able to see the following things now;
    // // // localhost with status of 304;
    // // // Click on that you will move enter; 
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

        response.send("<h1>Hello World</h1>");
    // // In browser open the Network tab;
    // // You are able to see the following things now;
    // // localhost with status of 200;
    // // Click on that you will move enter; 
     /**
     * * General 
     *  Request URL:        http://localhost:1915/
        Request Method:     GET
        Status Code:        200 OK
        Remote Address:     [::1]:1915
        Referrer Policy:    strict-origin-when-cross-origin


     * * Response Headers 
     *  connection:         keep-alive
        content-length:     20
        content-type:       text/html; charset=utf-8
        date:               Fri, 09 May 2025 08:45:51 GMT
        etag:               W/"14-SsoazAISF4H46953FT6rSL7/tvU"
        keep-alive:         timeout=5
        x-powered-by:       Express
     
     * 
     */
});


// // // Formation of About Page;
app.get("/about", (req, res) => {
    res.send("Welcome to the About page.");
    // // // In browser open the Network tab;
    // // // You are able to see the following things now;
    // // // localhost with status of 304;
    // // // Click on that you will move enter; 
    /**
     * * General 
     *  Request URL:        http://localhost:1915/about
        Request Method:     GET
        Status Code:        304 Not Modified
        Remote Address:     [::1]:1915
        Referrer Policy:    strict-origin-when-cross-origin

     * * Response Headers 
     *  connection:         keep-alive
        date:               Fri, 09 May 2025 08:59:25 GMT
        etag:               W/"1a-OMYp/OEdHQkpKd5AXxD77CTRUZ
        keep-alive:         timeout=5
        x-powered-by:       Express
     
     * 
     */
});


// // // Formation of Contact Page;
app.get("/contact", (req, res) => {
    return res.send(`<div class="container">
        <h1>URL Shortener</h1>
        <form id="shorten-form">
            <div>
                <label for="url">Enter URL :-</label>
                <input type="url" name="url" id="url" required>
            </div>
            <div>
                <label for="shortCode">Enter ShortCode :-</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Shorten</button>
        </form>
        <h2>Shortened URLs</h2>
        <ul id="shortened-urls"></ul>
    </div>`);
    // // // In browser open the Network tab;
    // // // You are able to see the following things now;
    // // // localhost with status of 304;
    // // // Click on that you will move enter; 
    /**
     * * General 
     *  Request URL:        http://localhost:1915/contact
        Request Method:     GET
        Status Code:        304 Not Modified
        Remote Address:     [::1]:1915
        Referrer Policy:    strict-origin-when-cross-origin

     * * Response Headers 
     *  connection:         keep-alive
        date:               Fri, 09 May 2025 09:08:32 GMT
        etag:               W/"23a-dDwad+QdMpaLYICq07CDAHUzEEE
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
// // // You will get the result on the display on BOLD LETTERS as :- Hello World
// // // Now, open the browser and in url write localhost:1915/about
// // // You will get the result on the display as :- Welcome to the About page.
// // // Now, open the browser and in url write localhost:1915/contact
// // // You will get the result on the display as :- Structured form of URL Shortener;