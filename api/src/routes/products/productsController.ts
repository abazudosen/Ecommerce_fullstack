import { Request, Response } from "express";

export async function listProducts(req: Request, res: Response) {
  try {
    // const products = await db.select().from(productsTable);
    // res.json(products);
    res.send('listProducts')
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
   res.send('getProduct by id')
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
   res.send('create Product')
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
   res.send('update Product')
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
   res.send('delete Product')
  } catch (e) {
    res.status(500).send(e);
  }
}
