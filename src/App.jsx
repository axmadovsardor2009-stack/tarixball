import { Route, Routes, Link } from "react-router-dom"
import Ozbtarixi from "./tarix/Ozbtarixi"
import Jahontarixi from "./tarix/Jahontarixi.jsx"
import './app.css'
import News from "./tarix/News.jsx"
import { useEffect, useState } from "react"

function App() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 100); // 100ms

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <>
    <div className="flex w-full h-screen flex-col p-3">
      <h1 className="text-3xl w-full font-bold flex justify-evenly items-center pb-4">
        It is history <p className="text-xl">{formattedDate} - {time.toLocaleTimeString('en-US')}</p>
      </h1>
      <div className=" flex justify-between buttons">
        <Link to="/uzbtar" className="h-full w-full flex justify-center items-center">O'zbekiston tarixi</Link>
        <Link to="/jahtar" className="h-full w-full flex justify-center items-center">Jahon tarixi</Link>
        <Link to="/news" className="h-full w-full flex justify-center items-center">Yangiliklar</Link>
      </div>
      <div className="w-full h-full border-2 border-black p-2 flex">
        <table className="flex flex-col p-3 shadow-2xl h-full w-[20%] overflow-hidden ">
          <tr className="tr font-bold">Ismlar</tr>
          <tr className="tr">Oripov Muhammadjon</tr>
          <tr className="tr">Meyliyev Javohir</tr>
          <tr className="tr">Tursunov Azizbek</tr>
          <tr className="tr">Ahmadov Sardor</tr>
          <tr className="tr">Qodirov Sardorbek</tr>
          <tr className="tr">Nurmatova Nigina</tr>
          <tr className="tr">Vafoqulova Dilnura</tr>
          <tr className="tr">Furqatov Asadbek</tr>
          <tr className="tr">Bobonazarov Mirshod</tr>
          <tr className="tr">Haqmirzayev Bobur</tr>
          <tr className="tr">Rzayev Javohir</tr>
        </table>
        <div className="w-[70%] h-full overflow-x-scroll">
          <Routes>
          <Route path="/" element={<div>Choose from options</div>}/>
          <Route path="/uzbtar" element={<Ozbtarixi/>}/>
          <Route path="/jahtar" element={<Jahontarixi/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/*" element={<div><h1>404</h1>Not added yet</div>}/>
        </Routes>
        </div>
        <table className="flex flex-col p-3 shadow-2xl h-full w-[10%] overflow-hidden ">
          <p></p>
          <tr className="tr font-bold">Ismlar</tr>
          <tr className="tr">4</tr>
          <tr className="tr">0</tr>
          <tr className="tr">4</tr>
          <tr className="tr">4</tr>
          <tr className="tr">4</tr>
          <tr className="tr">2</tr>
          <tr className="tr">2</tr>
          <tr className="tr">2</tr>
          <tr className="tr">4</tr>
          <tr className="tr">2</tr>
          <tr className="tr">2</tr>
        </table>
      </div>
    </div>
      
    </>
  )
}

export default App
