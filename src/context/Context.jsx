import { createContext } from "react";


export const Context = createContext()


const ContextProvider = (props) => {

  const [input, setInput] = useState("")
  const [recentPrompt, setRecentPrompt] = useState("")
  const [prevPrompt, setPrevPrompt] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading,  setLoading] = useState(false)
  const [result,  setResultData] = useState("")

  const  delaypara = (index, nexWord) => {
    setTimeout(function(){
      setResultData((prev)  => prev + nexWord)
    }, 75 * index)
  }

  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setResultData(true)

    let response


    if (prompt !== undefined){
      response = await run(prompt)

      setRecentPrompt(prompt)
    }else{
      setPrevPrompt
      response = await run(prompt)
    }


    setRecentPrompt(input)
    setPrevPrompt((prev) => [...prev, input])

   const response = await run (input)

   let responseArray = response.split("**")
   let newResponse =""

   for(let i=0: i< responseArray.length; i++) {
    if(i==0  || i%2 !==1) {
      newResponse+= newResponse += responseArray[i]
    }else{
      newResponse += "<b> " + responseArray[i] + "</b>"
    }
   }
  let newResponse2 = newResponse.split("*").join("</br>")

  let newResponseArray = newResponse2.split("")

  for(let i=0; i<newResponseArray.length; i++){
    const nexWord = newResponse2[i]

    delaypara(i, nexWord) => {}
  }

   
   setResultData(newResponse2)
   setLoading(false)
   setInput("")
  }

 
const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  }

  return (
    <Context.Provider value={contextValue}> {props.children} </Context.Provider>
  )
}

export default ContextProvider