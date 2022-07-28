import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    //console.log('DATOS', datos)
    const {nombre, email, token} = datos

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "768902ce5cf305",
          pass: "3d751215a200e7"
        }
      });

      //informacion del email
      const info = await transport.sendMail({
        from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com',
        to: email,
        subject: "Uptask - Comprueba tu cuenta",
        text: "Conprueba tu cuenta en UPTask",
        html:`<p>Hola: ${nombre}. Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya está casi disponible, sólo debes confirmarla en el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
        <p>Si no creaste esta cuenta, por favor ignora este email</p>
        `
    })

};
