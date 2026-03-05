import { Router } from 'express';
import {
    createUser,
    createUsers,
    getAllUsers, 
    getUserByEmail
} from '../services/user'


export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true })
})

mainRouter.get('/test', (req, res) => {
    res.json({ testando: true });
})

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        data: {
            name: 'anny',
            email: 'anny@gmail.com',
            status: true,
            posts: {
                create: {
                    title: 'Post1 - Anny',
                    body: 'Firts post by Anny'
                }
            }
        }
    });
    if (user) {
        res.status(201).json({ user })
    } else {
        res.status(400).json({ error: 'Email already exists' })
    }
})

mainRouter.post('/users', async (req, res) => {
    const users = await createUsers([]);
    res.status(201).json({ ok: true })
});


mainRouter.get("/users", async (req, res) => {
  const users = await getAllUsers();
  if (users) {
    res.json({ users });
  } else {
    res.status(500).json({ error: "Error fetching users" });
  }
});

mainRouter.get('/user', async(req, res)=>{
  const user = await getUserByEmail ('anny@gmail.com');
  if(user){
    res.json ({user})
  } else {
    res.status(404).json({error:'user not found'})
  }
})