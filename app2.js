const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write('<th>hours spent</th>')
      res.write('<th>Amount paid</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Ooty</td>')
      res.write('<td>48</td>')
      res.write('<td>$ 700</td>')
      res.write('</tr>')
      res.write('<td>Kerala</td>')
      res.write('<td>72</td>')
      res.write('<td>$ 300</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>bangalore</td>')
      res.write('<td>36</td>')
      res.write('<td>$ 00</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>chennai</td>')
      res.write('<td>48</td>')
      res.write('<td>$ 100</td>')
      res.write('</tr>')
      res.write('</table>') 
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})