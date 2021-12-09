const mail = require('@sendgrid/mail').mail.setApiKey(
  process.env.SENDGRID_API_KEY
);
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: 'rdrade121@gmail.com',
    from: 'rodrigo.andrade@aluno.etecjrm.com.br',
    subject: 'Nova mensagem!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  mail.send(data);

  res.status(200).json({ status: 'OK' });
};
