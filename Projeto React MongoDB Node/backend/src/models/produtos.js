const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const ProdSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        min: 1,
        max: 9999,
        unique: true
    },
    nomeDoLivro: {
        type: String,
        minlenght: 3,
        maxlenght: 100
    },
    autor: {
        type: String,
        minlenght: 3,
        maxlenght: 100
    },
    quantidadeEstoque: {
        type: Number,
        minlenght: 1,
        maxlenght: 9999
    },
    vendidos: {
        type: Number,
        minlenght: 1,
        maxlenght: 9999
    },
    status: {
        type: String,
        minlenght: 1,
        maxlenght: 100
    },
    registro: {
        type: Date,
        default: Date.now

    }
});

ProdSchema.plugin(mongoosePaginate);

mongoose.model('Produtos', ProdSchema);
