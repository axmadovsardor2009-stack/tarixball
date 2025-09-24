import { Route, Routes, Link } from "react-router-dom"
import Ozbtarixi from "./tarix/Ozbtarixi"
import Jahontarixi from "./tarix/Jahontarixi.jsx"
import './app.css'

function App() {
  return (
    <>
    <div className="flex w-full h-screen flex-col p-3">
      <h1 className="text-3xl w-full font-bold flex justify-evenly">
        It is history <p>--:--:--</p>
      </h1>
      <div className=" flex justify-between buttons">
        <Link to="/uzbtar" className="h-full w-full flex justify-center items-center">O'zbekiston tarixi</Link>
        <Link to="/jahtar" className="h-full w-full flex justify-center items-center">Jahon tarixi</Link>
        <Link to="/student" className="h-full w-full flex justify-center items-center">Yangiliklar</Link>
      </div>
      <div className="w-full h-full border-2 border-black p-2 flex">
        <table className="flex flex-col p-3 shadow-2xl h-full w-[20%] overflow-hidden ">
          <p></p>
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
          <Route path="/*" element={<div><h1>404</h1>Not added yet</div>}/>
        </Routes>
        </div>
        <div className="flex flex-col p-3 shadow-2xl h-full w-[10%]">
          <p className="font-bold">Umumiy</p>
          <p>2</p>
          <p>2</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
