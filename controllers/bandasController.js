const bandasDB = require('../db/index');
const bandas = bandasDB.lista;
let bandasController = {
    index: function (req, res, next) {
        let title = "Listado de Bandas";
        res.render('listadoBandas', { title: title, bandas: bandas });
    },
    show: function (req, res, next) {
        let title = "Detalle de Banda";
        let id = req.params.id;
        let banda = bandas.find(band => band.id == id);
        if (banda !== undefined) {
            res.render('detalleBanda', { title: title, banda: banda });
        } else {
            let textoMensaje = 'Banda no esta en la BD';
            title = 'Error Banda no existe';
            res.render('errorBandas', { title: title, textoMensaje: textoMensaje })
        }

    },
    generos: function (req, res, next) {
        let title = "Lista de Generos"
        // Traigo una lista Unique de Generos
        let generos = bandas.map(banda => banda.genero);
        let listaGeneros = [...new Set(generos)];
        res.render('listadoGeneros', { title: title, listaGeneros: listaGeneros });
    },
    generoBands: function (req, res, next) {
        let title = "Bandas por Genero";
        let genID = req.params.genId;
        let bandasPorGenero = bandas.filter(banda => banda.genero == genID);
 
        if (bandasPorGenero !== undefined) {
            res.render('listadoBandas', { title: title, bandas: bandasPorGenero })
        } else {
            let textoMensaje = 'Genero no esta en la BD';
            title = 'Error genero no existe';
            res.render('errorBandas', { title: title, textoMensaje: textoMensaje })

        }


    }
}
module.exports = bandasController;