const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const advices = ["I can’t believe I got fired from the calendar factory. All I did was take a day off!",
                    "Money talks. Mine always says goodbye.",
                    "Why do bees hum? They don’t remember the lyrics!",
                    "Don’t spell part backward. It’s a trap.",
                    "R.I.P boiled water. You will be mist.",
                    "Alcohol is a perfect solvent: It dissolves marriages, families, and careers.",
                    "My wife just found out I replaced our bed with a trampoline. She hit the roof.", 
                    "Atheism is a non-prophet organization."
                ]
                let randomIndex = Math.floor(Math.random() * advices.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${advices[randomIndex]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})