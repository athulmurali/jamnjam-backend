var mongoose     = require('mongoose');
var UserSchema  = require('./User')

const models     = require('../const/models')



var adminSchema = UserSchema({
    isAdmin : {
        type: Boolean,
        default: true
    }
});

adminSchema.pre('save', function(next) {
    var user = this;
    console.log("Sdgsdgs")
    console.log(user)
    next();
});



module.exports=  mongoose.model(models.adminModel,adminSchema);