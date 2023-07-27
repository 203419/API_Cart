import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database';
import { CartInterface } from '../domain/cart';

interface CartCreationAttributes extends Optional<CartInterface, "id"> {}

class CartModel extends Model<CartInterface, CartCreationAttributes> {}

CartModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    imageUrl: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Cart"
  }
);

export default CartModel;
