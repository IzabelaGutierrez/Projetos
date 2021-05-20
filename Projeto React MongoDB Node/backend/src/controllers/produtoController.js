const mongoose = require('mongoose');
const Produtos = mongoose.model('Produtos');

module.exports = {
    async insert (req, res){
        const produtos = await Produtos.create(req.body);
        return res.json(produtos);
    },

    async select (req, res) {
        const { page } = req.query;
        const produtos = await Produtos.paginate({}, { page, limit: 1000});
        return res.json(produtos);
    },

    async buscaPorId (req, res){
        const produtos = await Produtos.findById(req.params.id);
        return res.json(produtos);
    },

    async update (req, res){
        const produtos = await Produtos.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(produtos);
    },

    async delete (req, res){
        await Produtos.findByIdAndRemove(req.params.id);
        return res.send();
    }
}