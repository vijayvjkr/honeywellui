import React, { useState } from 'react';

function Honeywell() {
  const [input, setInput] = useState('');


  const [encryptedData, setEncryptedData] = useState(''); 

  const [decryptedData, setDecryptedData] = useState(''); 
  const [decryptedKey, setDecryptedKey] = useState(''); 


  //Encryption API call
  const handleSubmitEncrypt = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://your-backend-api-url.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });
      
      const data = await response.json();
      //setEncryptedData(data.data); 
      setEncryptedData(data);
     // console.log(data);
      alert('API call successful!');
    } catch (error) {
      console.error('Error:', error);
      setEncryptedData('some erro while encrypting the data.');
      alert('Failed to call API.');
    }
  };

 //Decryption API call
  const handleSubmitDecrypt = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://your-backend-api-url.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });
      
      const data = await response.json();
      const [dataValue, keyValue] = data.split(',');
      setDecryptedData(dataValue); // data
      setDecryptedKey(keyValue);  // key
     // console.log(data);
      alert('API call successful!');
    } catch (error) {
      console.error('Error:', error);
      setEncryptedData('some erro while encrypting the data.');
      alert('Failed to call API.');
    }
  };


  

  return (

    // encryption part
    <div style={{ textAlign: 'center', marginTop: '50px' }}>

    <h1 style={{ 
      color: 'red', 
      textAlign: 'center', 
      fontSize: '72px', 
      fontWeight: 'bold', 
      textTransform: 'uppercase'
    }}>
      HONEYWELL
    </h1>


      <h1>Encryption:</h1>
      <form onSubmit={handleSubmitEncrypt}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text to encrypt"
        />
        <button type="submitEncrypt">Submit</button>
      </form>

      {/* encrypt response sending in UI part */}
        <div style={{
          marginTop: '20px',
          padding: '10px',
          border: '1px solid #000',
          display: 'inline-block',
          backgroundColor: '#f5f5f5'
        }}>
          {encryptedData}
        </div>
    
      
      {/* decryption part */}
      <h1>Decryption:</h1>
      <form onSubmit={handleSubmitDecrypt}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text to decrypt"
        />
        <button type="submitDecrypt">Submit</button>
      </form>

       {/* decrypt response sending in UI part */}
       <strong>Data: </strong>
        <div style={{
          marginTop: '20px',
          padding: '10px',
          border: '1px solid #000',
          display: 'inline-block',
          backgroundColor: '#f5f5f5'
        }}>
          {decryptedData}
        </div>
        <strong>Key:</strong>
        <div style={{
          marginTop: '20px',
          padding: '10px',
          border: '1px solid #000',
          display: 'inline-block',
          backgroundColor: '#f5f5f5'
        }}>
          {decryptedKey}
        </div>
      

     



    </div>
  );
}

export default Honeywell;
