const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  guests: [GuestSchema]
});

module.exports = mongoose.model('Event', EventSchema);
