

var express = require('express')
var app = express();
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//var texto = 'TRIBUNAL DE JUSTIÇA DO RIO GRANDE DO NORTE PODER JUDICIARIO MOSSORÓ 3º JUIZADO ESPECIAL CÍVEL DE MOSSORÓ Felipe Camarão, 968, Doze Anos, MOSSORÓ - RN Fone: (84) 3317-1177 CARTA/MANDADO DE CITAÇÃO para CARTAO CARREFOUR O(A) MM(a). Welma Maria Ferreira De Menezes cita a parte supra, CARTAO CARREFOUR, nos termos do art. 172, § 2º do CPC, combinado com o art. 12 da Lei 9.0 99/95, para todos os termos da ação indicada, ciente que deverá comparecer à audiência de conciliação, na data e hora designada. Bem como, INTIMEI acerca da Decisão em epigrafe: Defiro o pedido e, em conseqüência, concedo a medida liminar para o fim de determinar seja procedida a imediata suspensão da cobrança do seguro, ora em discussão, com o encaminhamento de faturas ao autor sem o respectivo débito. Para a hipótese de descumprimento injustificado, arbitro multa diária no valor de R$ 100,00 (cem reais) até o limite de R$ 5.000,00 (cinco mil reais). ADVERTÊNCIA: O não comparecimento às audiências importará em revelia, reputando-se como verdadeiras as alegações iniciais do autor e proferindo-se o julgamento de plano. Comparecendo a parte promovida (ré), e não obtida a conciliação, poderá a ação ser julgada antecipadamente, se for o caso, ou se proceder à audiência de instrução e julgamento. O promovido deverá oferecer contestação, escrita ou oral, na audiência de instrução e julgamento, sendo obrigatória, nas causas de valor superior a 20 salários mínimos, a presença de advogado. Em se tratando de pessoa jurídica, o preposto deverá apresentar no ato da audiência respectiva a carta de preposição, sob pena de revelia. OBSERVAÇÃO: Este processo tramita através do sistema computacional E-CNJ (Projudi), cujo endereço na web é https://projudi.tjrn.jus.br/projudi/ . Para se cadastrar neste sistema compareça na sede deste juízo. Documentos (procurações, cartas de preposição, contestações) devem ser trazidos ao juízo em formato digital (CD, DISQUETE etc.) em arquivos com no máximo 3MB cada. ATENÇÃO:AUDIÊNCIA DE Conciliação DESIGNADA PARA 2 de Outubro de 2012 às 10:00 NA SALA DE AUDIÊNCIAS DO(A) 3º Juizado Especial Cível de Mossoró. LOCAL: 3º Juizado Especial Cível de Mossoró Felipe Camarão nº 968 Bairro: Doze Anos, Cidade: MOSSORÓ-RN CEP: 59.603-340';

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







  
  


