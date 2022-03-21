const mongoose = require('mongoose');



const tripSchema = mongoose.Schema({

  name:{
    type: String,
    require: true
  },
  origin: {
    type: String,
    require: true
  },
  destino: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    require: true
  },
  num_pasajeros: {
    type: Number,
    require: true
  },
  presupuesto: {
    type: Number,
    require: true,
  },
  lista_deseos: {
    type: Array,
    require: false
  },
  niñeras: {
    type: Object,
    require: false
  },

  fecha_cre: {
    type: Date,
    default: Date.now()
  }

});




module.exports = mongoose.model('newtrip', tripSchema);

