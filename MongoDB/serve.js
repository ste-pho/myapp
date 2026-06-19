import dotenv from 'dotenv'
dotenv.config()
import dns from 'dns';
dns.setServers(['1.1.1.1', '1.0.0.1'])
import express from 'express'
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(express.json())



mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('mongodb connected successfully')
}).catch((err) => {
  console.log(`Error ${err}`)
})

const userSchema = new mongoose.Schema({name: {type: String, required: true}, age: Number, email: {type: String, required: true}})

const User = mongoose.model('user', userSchema)

app.post('/users', async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json(user)
})

app.get('/users', async (req, res) => {
  const user = await User.find()
  res.json(user)
})

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user)
})

app.put('/users/:id', async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json(updateUser)
})

app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: 'User deleted successfully' })
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})