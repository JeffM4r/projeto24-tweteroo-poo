class AuthController {
  constructor() {
    this.usuarios = []
    this.createUser = this.createUser.bind(this)
    this.findUser = this.findUser.bind(this)
  }

  createUser (req, res) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }

    this.usuarios.push({ username, avatar });

    res.status(200).send('OK deu tudo certo');
  }
  
  findUser (username) {
    if(this.usuarios.find(user => user.username === username) === undefined){
      return "NoUser"
    } 
    return this.usuarios.find(user => user.username === username)
  }
}

export default new AuthController();