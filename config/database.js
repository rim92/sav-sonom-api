//module.exports = {
//    localUrl: 'mongodb://localhost/sonomusic'
//};




var mongoose = require('mongoose');


//mongoose.connect('mongodb://localhost/sonomusic');
//mongoose.connect('mongodb://rimi:RIMA23379665@ds125422.mlab.com:25422/sav');


var uri = 'mongodb+srv://rimi:RIMA23379665@sav.4upj0.mongodb.net/sav?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(err => console.log(err))





module.exports = mongoose;