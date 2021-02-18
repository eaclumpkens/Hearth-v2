const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Topic
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Topic
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByCategory: function(req, res) {
        db.Topic
          .find({ category: req.params.category })
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Topic
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Topic
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {

      //these will be environmental variables
      const imdbApiKey = 'bfe070362amsh86909dbb9fbfe22p191db1jsnfb9dfda72961';
      const host = 'imdb8.p.rapidapi.com';
  
      let topicObj = {
        topic: "",
        category: req.body.category,
        label: "",
        value: "",
        genre: "",
        age_range: "",
        image: "",
        description: "",
        reviews: []
      }
      console.log(topicObj);
      switch (topicObj.category) {
        case "Film":
          let options1 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
            params: { q: req.body.topic },
            headers: {
              'x-rapidapi-key': imdbApiKey,
              'x-rapidapi-host': host
            }
  
          };
          axios.request(options1).then(function (response) {
            topicObj.title = response.data.d[0].l;
            topicObj.label = response.data.d[0].l;
            const split = activity.title.split(" ");
            topicObj.local_ext = split.join("");
  
            db.Topic
              .find({ topic: topicObj.topic })
              .then(dbModel => {
                if (!dbModel[0]) {
                  db.Topic
                    .create(Topic)
                    .then(dbTopic => {
                      console.log(dbTopic);
                    })
                    .catch(err => { console.error(err); });
                }
                else {
                  //alert already created
                }
              }).catch(function (error) {
                console.error(error);
              });
  
          }).catch(function (error) {
            console.error(error);
          });
          break;
  
        case "Television":
          let options2 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
            params: { q: req.body.topic },
            headers: {
              'x-rapidapi-key': imdbApiKey,
              'x-rapidapi-host': host
            }
  
          };
          axios.request(options2).then(function (response) {
            topicObj.topic = response.data.d[0].l;
            topicObj.label = response.data.d[0].l;
  
            const split = topicObj.topic.split(" ");
  
            db.Topic
              .find({ topic: topicObj.topic })
              .then(dbModel => {
                if (!dbModel[0]) {
                  db.Topic
                    .create(Topic)
                    .then(dbTopic => {
                      console.log(dbTopic);
  
                    })
                    .catch(err => { console.error(err); });
                }
                else {
                  //alert already created
                }
              }).catch(function (error) {
                console.error(error);
              });
  
          }).catch(function (error) {
            console.error(error);
          });
          break;
  
        case "Books":
          let options3 = {
            method: 'GET',
            url: 'http://openlibrary.org/search.json?',
            params: { q: req.body.topic }
          };
          axios.request(options3).then(function (book) {
            activity.title = book.data.docs[0].title;
            activity.label = book.data.docs[0].title;
  
            const split = activity.title.split(" ");
            activity.local_ext = split.join("");
  
            db.Topic
              .find({ title: topicObj.topic })
              .then(dbModel => {
                if (!dbModel[0]) {
                  db.Topic
                    .create(topicObj)
                    .then(dbTopic => {
                      console.log(dbTopic);
  
                    })
                    .catch(err => { console.error(err); });
                }
                else{
                  //alert already created
                }
              }).catch(function (error) {
                console.error(error);
              });
  
          }).catch(function (error) {
            console.error(error);
          });
          /*    .then(search => 
                db.Activity
                .findById(type)
            .then(dbModel => if(dbModel !== {})
            create comment 
            put update with rating}
            else{
              create activity
              create comment
            }
            .catch(err => res.status(422).json(err));
              */
          break;
  
        case "Music":
            const shazamAPIKey = 'bfe070362amsh86909dbb9fbfe22p191db1jsnfb9dfda72961';
            const shazamAPIHost = 'shazam.p.rapidapi.com'
  
          const options4 = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: {term: req.body.topic, locale: 'en-US', offset: '0', limit: '5'},
            headers: {
              'x-rapidapi-key': shazamAPIKey,
              'x-rapidapi-host': shazamAPIHost
            }
          };
          
          axios.request(options4).then(function (response) {
            console.log(response.data.tracks.hits[0]);
            topicObj.topic = response.data.tracks.hits[0].track.title;
            topicObj.label = response.data.tracks.hits[0].track.title;
  
            const split = topicObj.title.split(" ");
            topicObj.local_ext = split.join("");
  
            db.Topic
              .find({ title: topicObj.topic })
              .then(dbModel => {
                if (!dbModel[0]) {
                  db.Topic
                    .create(topicObj)
                    .then(dbActivity => {
                      console.log(dbActivity);
  
                    })
                    .catch(err => { console.error(err); });
                }
                else{
                  //alert already created
                }
              }).catch(function (error) {
                console.error(error);
              });
  
          }).catch(function (error) {
            console.error(error);
          });
  
  
          break;
  
        default:
          break;
      }
      db.Topic
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
