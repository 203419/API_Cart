import express from 'express';
import { CartService } from '../application/cart_service';
import { CartRepository } from './cart_repository_impl';
// import { sequelize } from '../../config/database';

const app = express();
const cartRepository = new CartRepository();
const cartService = new CartService(cartRepository);

app.use(express.json());

app.post('/carts', async (req, res) => {
  const cartData = req.body;
  const cart = await cartService.createCart(cartData);
  res.json(cart);
});

app.get('/carts/:userId', async (req, res) => {
  const userId = req.params.userId;
  const carts = await cartService.getCartItemsByUserId(userId);
  res.json(carts);
});

app.delete('/carts/:cartId', async (req, res) => {
  const cartId = parseInt(req.params.cartId);
  const deleted = await cartService.deleteCartItem(cartId);
  res.json({ deleted });
});

export default app;
