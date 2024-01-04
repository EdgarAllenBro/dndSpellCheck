import { DataTypes , Model } from "sequelize";
import url from 'url'
import util from 'util'
import connectToDB from "./db.js";
import process from "process";

const db = await connectToDB('postgresql:///spellCheck')


class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}
class SavedSpells extends Model {
    [util.inspect.custom](){
        return this.toJSON();
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName: {
            type:DataTypes.STRING(30),
            allowNull:false,
            unique:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        }
    },
    {
        modelName: 'user',
        sequelize: db
    }
)

SavedSpells.init(
    {
        savedId:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        spell:{
            type: DataTypes.STRING
        }
    },
    {
        modelName: 'savedSpells',
        sequelize: db
    }
)
    User.SavedSpells = User.hasMany(SavedSpells,
        {
            foreignKey:'userId'
        }
    )


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
  
    // If we don't manually close the connection, the script will hang a couple seconds
    // before closing.
    await db.close();
    console.log('Finished syncing database!');
  }
  

export {User,SavedSpells}