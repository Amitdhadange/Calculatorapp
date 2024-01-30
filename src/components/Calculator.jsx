import React, { useState } from 'react'

const calculator = () => {

    const [result, setResult]=useState("")
    const clickHandler=(e)=>{
        setResult(result.concat(e.target.value));
    }
    const clearscreen=()=>{
        setResult("");
    }
    const calculate=()=>{
        setResult(eval(result).toString());
    }

  return (
    <div className=' bg-gradient-to-r from-green-300 to-violet-400 text-white w-screen h-screen flex justify-center items-center'>
        
        <div className='w-64 h-auto bg-black-800 rounded-2xl shadow-xl border -gray-100 border-4'>
            <div className='screen p-2'>
                <input type="text" 
                value={result}
                className='shadow-xl text-black px-1 text-right placeholder-black outline-none rounded-lg bg-gradient-to-r from-violet-200 to-pink-200 text-2xl pt-10 w-full text-black placeholder-0 border-slate-700 border-2'/>
            </div>
            <div className='brand flex justify-center mb-2 shadow-md text-gray-500 bg-gray-200 bg-opacity-90'>
                <h1 className='text-gray-900 text-xs font-bold'>Math Mingle</h1>
            </div>
            {/* keybord */}
            <div className='keybord'>
                <div className='m-2 flex justify-between'>

                <input type="button" onClick={clearscreen} value="c"  className='bg-gradient-to-r from-red-700 to-red-500 shadow-[0px_2px_2px_2px_#b91c1c] rounded-lg w-12 h-12 text-center text-black font-bold text-xl flex justify-center items-center outline-none cursor-pointer hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90' onClickCapture={clickHandler} />
                <input type="button" value="<"  className='bg-gradient-to-r from-slate-500 to-slate-300 shadow-[0px_2px_2px_2px_#475569] rounded-lg w-12 h-12 text-center text-black  flex justify-center items-center font-bold text-xl outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="%"  className='bg-gradient-to-r from-slate-500 to-slate-300 shadow-[0px_2px_2px_2px_#475569] rounded-lg w-12 h-12 text-center text-black flex justify-center items-center font-bold text-xl outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="/"  className='bg-gradient-to-r from-slate-500 to-slate-300 shadow-[0px_2px_2px_2px_#475569] rounded-lg w-12 h-12 text-center text-black font-bold text-xl flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />

                </div>
            </div>
            <div className='keybord'>
                <div className='m-2 flex justify-between'>
                
                <input type="button" value="7"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="8"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer'onClickCapture={clickHandler}  />
                <input type="button" value="9"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="*"  className='bg-gradient-to-r from-slate-500 to-slate-300 shadow-[0px_2px_2px_2px_#475569] rounded-lg w-12 h-12 text-center text-black font-bold text-xl flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />

                </div>
            </div>
            <div className='keybord'>
                <div className='m-2 flex justify-between'>

                <input type="button" value="4"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="5"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="6"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="-"  className='bg-gradient-to-r from-slate-500 to-slate-300 shadow-[0px_2px_2px_2px_#475569] rounded-lg w-12 h-12 text-center text-black font-bold text-xl flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer'onClickCapture={clickHandler}  />

                </div>
            </div>
            <div className='keybord'>
                <div className='m-2 flex justify-between'>

                <input type="button" value="1"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="2"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline- hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="3"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="+"  className='bg-gradient-to-r from-slate-500 to-slate-300 shadow-[0px_2px_2px_2px_#475569] rounded-lg w-12 h-12 text-center text-black font-bold text-xl flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer'onClickCapture={clickHandler}  />

                </div>
            </div>
            <div className='keybord'>
                <div className='m-2 flex justify-between'>

                <input type="button" value="0"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="00"  className='bg-gradient-to-r from-slate-300 to-slate-200 shadow-[0px_2px_2px_2px_#94a3b8] rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" value="."  className='bg-gradient-to-r from-slate-500 to-slate-300 shadow-[0px_2px_2px_2px_#475569] rounded-lg w-12 h-12 text-center text-black font-bold text-xl flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer' onClickCapture={clickHandler} />
                <input type="button" onClick={calculate}  value="="  className='bg-gradient-to-r from-green-400 to-green-200 shadow-[0px_2px_2px_2px_#047857] rounded-lg w-12 h-12 text-center text-black font-bold text-xl flex justify-center items-center outline-none hover:shadow-[0px_2px_2px_2px_#00000] hover:scale-90 cursor-pointer'  />

                </div>
            </div>
        </div>
        
        </div>
  )
}

export default calculator