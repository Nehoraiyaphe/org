import {Sequelize} from 'sequelize'
import 'dotenv/config'
const dataBase = new Sequelize(process.env.URL_LOCAL_POSTGRAS)


export const dbConection = async () => {
    try {
        await dataBase.authenticate();
        return'Connection has been successfully.🚀👌'
      } catch (error) {
        return( error);
      }
}

export default dataBase