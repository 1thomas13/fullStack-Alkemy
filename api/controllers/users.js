const {User} = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {
    
    const {email, password, repeatPassword} = req.body

    if(!email || !password || !repeatPassword) {
        return res.status(400).json({message: 'Debes completar todos los campos'})
    }

    if(password !== repeatPassword) {
        return res.status(400).json({message: 'Las contraseñas no coinciden'})
    }

    const userExist = await User.findOne({where: {email: email}})

    if(userExist) {
        return res.status(400).json({message: 'Ya existe un usuario con ese email'})
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = {
        email,
        password: hash
    }

    try {
        await User.create(user)

        res.json({message: 'Usuario Creado Correctamente'})

    } catch (error) {
        return res.status(400).json({message: Error})
    } 
}

exports.login = async(req, res) => {

    const {email, password} = req.body

    if(!email || !password) {
        return res.status(400).json({message: 'Debes completar todos los campos'})
    }

    try {

        const user = await User.findOne({where: {email: email}})

        if(!user) {
            return res.status(200).json({message: 'El usuario no existe'})
        }
        
        const validate = bcrypt.compareSync(password, user.password);
        
        if(!validate) {
            return res.status(400).json({message: 'Contraseña Incorrecta'})
        }

        const token = jwt.sign({id: user.id }, 'password', { expiresIn: '48h' });

        res.status(200).json({message: token})

    } catch (error) {
        return res.status(400).json({message: Error})
    } 
}