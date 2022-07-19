export default sendMail = (req, res) => {
  // 改行のエスケープシークエンスをbrタグに置換
  const htmlMsg = req.body.message.replaceAll("\n", "<br>")
  let nodemailer = require("nodemailer");

  // 送信用アカウントの設定（ここではGmail）
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "sender@gmail.com",
      // Googleアカウントでアプリパスワードを取得してくれる。
      pass: "google_application_password",
    },
    secure: true,
  });

  //管理人に送るお問い合わせメッセージ
  const toHostMailData ={
    from: "sender@mail.com",
    to: "host@mail.com",
    subject: `【お問い合わせ】${req.body.name}様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <p>【名前】</p>
    <p>${req.body.name}</p>
    <p>【メッセージ】</p>
    <p>${htmlMsg}</p>
    <p>【メールアドレス】</p>
    <p>${req.body.email}</p>
    `,
  };

  //ゲストに送る自動受付メール
  const toGuestMailData = {
    from: "sender@mail.com",
    //入力されたゲストのメールアドレスが入る
    to: `${req.body.email}`,
    subject: `【お問い合わせ自動受付メール】`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <p>お問い合わせありがとうございます。<br>
    以下の内容でお問い合わせを承りました。
    </p>
    <p>------------------------------------------------------------</p>
    <h2>お問い合わせ内容</h2>
    <p>【名前】</p>
    <p> ${req.body.name}</p>
    <p>【メッセージ】</p>
    <p>${htmlMsg}</p>
    <p>【メールアドレス】</p>
    <p>${req.body.email}</p>
    <p>------------------------------------------------------------</p>
    `,
  };

  //送信する
  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  transporter.sendMail(toGuestMailData, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send("success");
}