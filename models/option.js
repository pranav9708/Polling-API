const mongoose=require('mongoose');

const optionSchema=new mongoose.Schema({
    id:{
        type:'number',
        required: true
    },
    text:{
        type:'string',
        required: true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    votes:{
        type:'number'
    },
    link_to_vote:{
        type:'string'
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Option',optionSchema);