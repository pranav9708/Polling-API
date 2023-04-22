const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    id:{
        type:'number',
        required: true
    },
    text:{
        type:'string',
        required: true
    },

    //store id of all options available for question
    options:[
        {
           type:mongoose.Schema.Types.ObjectId,
           ref:'Option',
        }
    ]
},{
    timestamps:true
})

module.exports=mongoose.model('Question',questionSchema);