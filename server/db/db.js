import {Sequelize} from 'sequelize'


async function connectToDB(dbURI) {
    const sequelize = new Sequelize(dbURI, {
        logging: console.log,
        define: {
            timestamps:false,
            underscored: true,
        },
    })
    try { 
        await sequelize.authenticate();

    } catch(error) {
        console.log(error)
    }
    return sequelize
}


export default connectToDB