const {DataTypes}= require("sequelize")

module.exports =(sequelize)=>{
    //defino el modelo
    sequelize.define("character",{

        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },

        name:{
            type:DataTypes.STRING,
            allowNull:false,   
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        species:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        type:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        Image:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        location:{
            type:DataTypes.STRING,
            allowNull:false
        },

        createdInDb:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }



    })
}