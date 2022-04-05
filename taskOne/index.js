const fastify = require("fastify")({
  logger: true,
});
const connection = require("./src/utils/dbcon");
var {MongoClient,ObjectId} = require('mongodb');


fastify.register(require('fastify-cors'), { 
  // put your options here

  origin:"*"
})


fastify.get('/',async(req,res)=>{
  const client = new MongoClient(connection.url);
  await client.connect();
  const db = client.db(connection.name);
  return({"hello":"world"})
})

fastify.register(require("./src/api/api"),{prefix:'/api'});

const swagger = require("./src/utils/swagger");
fastify.register(require("fastify-swagger"), swagger.options);

const start = async () => {
  try {
    await fastify.listen(4000);
    fastify.swagger();
    console.log(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
