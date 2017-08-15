

var express = require('express')
var app = express();
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/'));

app.post("/citacao", function(req,res){

  texto = req.body.texto;
  

  var nlu = new NaturalLanguageUnderstandingV1({
    username: '9b67a778-c517-4c9e-b92f-9576b95e5543',
    password: 'IUxNpx8mHy4t',
    version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
  });



  nlu.analyze({
    'text': texto,
    'language': 'pt',
    'features': {
       'entities': {'model': '10:d9e8d65e-d300-4cb5-9c5e-9c419d46e198'}
                },
    }, function(err, response) {
       if (err) 
         console.log('error:', err);
       else 
        { 

          //response.entities.forEach(function(dados){
          //    console.log(dados.type + " : " + dados.text );
          //});
          res.send(response);
          res.end();  
        }   
      
      
        
    })

}); //FIM DO POST 'CITACAO'

app.post("/inicial", function(req,res){

  texto = req.body.texto;
  

  var nlu = new NaturalLanguageUnderstandingV1({
    username: '2dc01002-408d-41bd-bcb6-9e76cdab4d13',
    password: 'tyOLeQzWGewB',
    version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
  });



  nlu.analyze({
    'text': texto,
    'language': 'pt',
    'features': {
       'entities': {'model': '10:25c10f30-477f-4dcb-8d26-bcba5b5ecc1c'}
                },
    }, function(err, response) {
       if (err) 
         console.log('error:', err);
       else 
        { 

          //response.entities.forEach(function(dados){
          //    console.log(dados.type + " : " + dados.text );
          //});
          res.send(response);
          res.end();  
        }   
      
      
        
    })

}); //FIM DO POST 'INICIAL'


//porta = 80;
porta = process.env.PORT;

app.listen(porta, function(){

  console.log("Servidor rodando...");

});







  
  


