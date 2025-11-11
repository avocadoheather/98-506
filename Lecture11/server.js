import http from "http";

const hostname = '127.0.0.1'; // Localhost IP address
const port = 3000; // Port to listen on
const liveServerPort = 5500; // Port from the Live Server extension

const server = http.createServer((req, res) => {
    console.log("---------------");
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    console.log("Headers:", req.headers);
    if (req.url.startsWith("/get-endpoint")) {
        console.log("Handling GET...");
        handleGet(req, res);
    } else if (req.url.startsWith("/post-endpoint")) {
        handlePost(req, res);
    } else if (req.url.startsWith("/fetch-test")) {
        handleFetchTest(req, res);
    }
});

function handleGet(req, res) {
    const parsedUrl = new URL(req.url, `http://${hostname}:${port}`);
    const params = parsedUrl.searchParams;
    console.log("Params:", params.entries().toArray())
    // res.writeHead(200, { "Content-Type": 'text/plain' });
    res.writeHead(302, { "Location": `http://${hostname}:${liveServerPort}/Lecture11/index.html` })

    res.end("GET form data received successfully!");
}

function handlePost(req, res) {
    let body = '';

    // Listen for data chunks
    req.addEventListener('data', chunk => {
        body += chunk.toString();
    });

    req.addEventListener('end', () => {
        // Parse the URL-encoded form data
        const formData = URLSearchParams(body);
        console.log('Received form data:', formData.entries().toArray());

        // res.writeHead(200, { 'Content-Type': 'text/plain' });
        // res.end("POST form data received successfully!");
        res.writeHead(302, { "Location": `http://${hostname}:${liveServerPort}/Lecture11/index.html` })
    });
}

function handleFetchTest(req, res) {
    const parsedUrl = new URL(req.url, `http://${hostname}:${port}`);
    const params = parsedUrl.searchParams;
    console.log("Params:", params.entries().toArray())
    res.writeHead(200, { "Content-Type": 'text/plain' });

    res.end("Hello World!");
}

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});