const moongose = require('mongoose')

const eventSchema = moongose.Schema({
    organizationName: {
        type: String,
        required: [true, "Please send a valid name"]
    },
    purpose: {
        type: String,
        required: [true, "Please send a purpose"]
    },
    from: {
        type: Date,
        required: [true, "Event start date is required"]
    },
    to: {
        type: Date,
        required : [true, "Event end date is required"]
    },
    theme: {
        type: String,
        required : [true, "Theme is required"]
    },
    fooding: Boolean
})

module.exports = mongoose.model('Event', eventSchema);