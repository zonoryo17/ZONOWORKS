// import { useState } from 'react';

// const useMail = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const send = async () => {
//     await fetch('/api/mail', {
//       method: 'POST',
//       body: `
// お名前
// ${name}

// メールアドレス
// ${email}

// 電話番号
// ${phoneNumber}

// お問い合わせ内容
// ${message}
// `,
//     });
//   };

//   return {
//     setName, setEmail, setPhoneNumber, setMessage, send,
//   };
// };

// export default useMail;