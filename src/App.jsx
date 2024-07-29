import { useState } from 'react'
import './App.css'
import QRCode from "react-qr-code"

function App() {
  const [qrCode,setQrCode]=useState('');
  const [input,setInput]=useState('');

  const handleQrCode=()=>{
    setQrCode(input);
  }
  return (
    <div>
      <h1 className=' text-2xl font-bold mb-4'>QR Code Generator</h1>
      <input type="text" 
      placeholder='Enter your name'
      value={input}
      className=' placeholder:font-semibold focus:outline-none p-2 rounded-md mx-2 bg-slate-100 w-[30vw]'
      onChange={(e)=>setInput(e.target.value)}
      />
      <button disabled={input && input.length ? false : true} className='px-3 py-1 bg-blue-500 disabled:opacity-40 text-white rounded-lg hover:opacity-75' onClick={handleQrCode}>Generate</button>
      <div className='w-[80vw] flex items-center justify-center mx-auto mt-5'>
        <QRCode id='qr-code' value={qrCode} size={300} />
      </div>
    </div>
  )
}

export default App
