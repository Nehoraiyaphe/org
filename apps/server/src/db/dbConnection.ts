import {Sequelize} from 'sequelize'


export const dataBase = new Sequelize(process.env.URL_LOCAL_POSTGRAS, {schema: 'public'})

const connectionDB = async () =>{
    try {
        await dataBase.authenticate();
        return 'Connection has been established successfully.'
      } catch (error) {
        return { message: 'Unable to connect to the database:', error}
      }
}


export default connectionDB