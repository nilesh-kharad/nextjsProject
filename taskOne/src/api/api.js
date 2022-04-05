const fastify = require("fastify")({
  logger: true,
});

const boom = require("boom");
const connection = require("../utils/dbcon");
var { MongoClient, ObjectId } = require('mongodb');
module.exports = function (fastify, options, done) {
 

  fastify.post('/addResearch', async (req, reply) => {
    try {
      const client = new MongoClient(connection.url);
      await client.connect();
      const db = client.db(connection.name);
      var data = {
        researchType: req.body.researchType,
        paperTitle: req.body.paperTitle,
        authorName: req.body.authorName,
        deptTeachers: req.body.deptTeachers,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        citations: req.body.citations,
        paperUrl: req.body.paperUrl,
        indexing: req.body.indexing,
        journalName: req.body.journalName,
        sponsored: req.body.sponsored,
        sponsorshipLetterUrl: req.body.sponsorshipLetterUrl,
        copyright: req.body.copyright,
        copyrighturl: req.body.copyrighturl
      }
      await db.collection('researchPapers').insertOne(data);
      reply.send({ status: true })

    } catch (err) {
      reply.send({ status: false })
      throw boom.boomify(err);
    }
  });

  fastify.get('/getAllResearch',async (req,reply)=>{
    reply.header("Access-Control-Allow-Origin", "*");
    reply.header("Access-Control-Allow-Methods", "POST");
    
    const client = new MongoClient(connection.url);
    await client.connect();
    const db = client.db(connection.name);
    collection_of_page_data = await db.collection('researchPapers').find().toArray();
    await client.close();

    reply.send({ status: true , data:collection_of_page_data})


  })
  done()
}
