import React, { useState } from 'react'
import Word from './Word'

export default function Input() {
    var words = ['time','year','people','way','day',' man','thing','woman','life','child','world','school','state','family','student','group','country','problem','hand','part','place','case','week','company','system','program','question','work','government','number','night','point','home','water','room','mother','area','money','story','fact','month','lot','right','study','book','eye','job','word','business','issue','side','kind','head','house','service','friend','father','power','hour','game','line','end','member','law','car','city','community','name','president','team','minute','idea','kid','body','information','back','parent','face','others','level','office','door','health','person','art','war','history','party','result','change','morning','reason','research','girl','guy','moment','air','teacher','force','education']
    const [filteredWords, setFilteredWords] = useState(words.slice(0,10))
    const [error, setError] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)
    const [finished, setFinished] = useState(false)



    const handleShuffle = (allWords:Array<string>, newArrLength:number)=> {
        for (let i = allWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
        }
         setFilteredWords(allWords.slice(0, newArrLength))
    }
    const handleChangeIndex = (e:any) =>{ 
        if(e.keyCode === 32){
            setWordIndex(wordIndex+1)
        }
    }
    const handleInput = (e:any, wordCheckArr:Array<string>) =>{
        if(wordCheckArr[wordIndex].includes(e.target.value)){
            setError(false)
        }
        else{
            setError(true)

        }
    }
  return (
    <>
        <div className="words-container w-8/12 mx-auto ">
            <input type="text" className='border border-neutral-950' onKeyDown={(e)=>handleChangeIndex(e)} onChange={(e)=>{handleInput(e, filteredWords)} }/>
            <Word data={filteredWords} />
            <button onClick={()=> {handleShuffle(words, 10)}}>Shuffle words</button>
            {error && <div>U hav made mistaek</div>}
        </div>
    </>
  )
}
