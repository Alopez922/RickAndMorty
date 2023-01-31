const {DataTypes}= require("sequelize")

module.exports =(sequelize)=>{
    //defino el modelo
    sequelize.define("episode",{
        
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        air_date:{
            type:DataTypes.STRING,
            allowNull:false
        },

        
        
    })
    
   }
