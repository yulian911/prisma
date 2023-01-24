import express, { NextFunction, Request, Response } from 'express';
import { db } from './config/db.server';

const app = express();
app.use(express.json());

app.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { pl, eng, id } = req.body;
  try {
    const word = await db.words.create({
      data: { PL: pl, ENG: eng, idGroupe: id },
    });
    res.json(word);
  } catch (err) {
    res.send(err);
  }
});

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const users = await db.user.findMany();
  res.json(users);
});
// app.get('/byId/:id', async (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.params;
//   const users = await db.user.findUnique({
//     where: { id },
//   });
//   res.json(users);
// });
// app.put('/', async (req: Request, res: Response, next: NextFunction) => {
//   const { id, name } = req.body;
//   const user = await db.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       name,
//     },
//   });
//   res.json(user);
// });
// app.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.params;
//   const user = await db.user.delete({
//     where: { id },
//   });
//   res.json(user);
// });

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
