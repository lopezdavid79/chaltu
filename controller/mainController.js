




const mainController = {
    home: (req,res) => {
        res.render('home',{title:"Chaltu bags"})
    },    
    contacto: (req,res) => {
        res.render('contacto',{title:"Chaltu Bags contacto"})
    }    

}

module.exports = mainController;