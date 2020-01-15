const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/darazAPI',
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
