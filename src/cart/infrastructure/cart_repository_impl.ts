import { CartRepositoryInterface } from "../domain/cart_repository";
import { CartInterface } from "../domain/cart";
import CartModel from "./cart_model";

export class CartRepository implements CartRepositoryInterface {
  async create(cartData: CartInterface): Promise<CartInterface> {
    const cart = await CartModel.create(cartData);
    return cart.get({ plain: true });
  }

  async getByUserId(userId: string): Promise<CartInterface[]> {
    const carts = await CartModel.findAll({ where: { userId } });
    return carts.map(cart => cart.get({ plain: true }));
  }

  async deleteById(cartId: number): Promise<boolean> {
    const deleted = await CartModel.destroy({ where: { id: cartId } });
    return deleted > 0;
  }
}
