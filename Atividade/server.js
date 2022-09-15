const http = require('http');

let server = http.createServer((request, response) => {
   
    console.log("URL" , request.url);
    console.log("METHOD" , request.method);

    switch (request.url){

        case '/': 

            response.statusCode=200;
            response.setHeader('Content-Type','text/html' );
            response.end('<h1>Disciplina Programacao Web 02</h1>');
            break;

        case '/users': 

            response.statusCode=200;
            response.setHeader('Content-Type','application/json' );

            response.end(JSON.stringify({

                user: [{
                    name: 'Aula03',
                    turma: 'ADS Tarde',
                    disciplina: 'Programacao web 02',
                    id: 1
                }]


            }

            ));


    }


}

);

server.listen(2500, '127.0.0.1', () => {
    console.log("Servidor rodando");
});