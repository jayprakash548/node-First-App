const mongoose = require('mongoose'); // Import Mongoose here
const schema = mongoose.Schema //Import Schema that defines in mongoose and we define
//how the structure it's look like

const appSchema = new schema({
    title:{
        type:String,
        default:'default title'
    },
    myID:{
        type:String,
        unique:true
    },
    description:{
        type:String,
        default:''
    },
    lastmodified:{
        type:Date,
        default:Date.now
    }
})
mongoose.model('app', appSchema);