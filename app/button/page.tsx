"use client"


import { ButtonSuccess, ButtonWarning, ButtonDanger,ButtonSuccessOutline,ButtonDangerOutline,ButtonInfoOutline } from "../../components/button";


const TestButton = () => {
   return(
       <div className="m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
           <ButtonSuccessOutline type="button" className="ml-2" onClick={() => alert("Success Outline button clicked!")}>
            Success Outline 
            </ButtonSuccessOutline>
            <ButtonDangerOutline type="button" className="ml-2" onClick={() => alert("Danger Outline button clicked!")}>
            Danger Outline 
            </ButtonDangerOutline>
            <ButtonInfoOutline type="button" className="ml-2" onClick={() => alert("Info Outline button clicked!")}>
            Info Outline 
            </ButtonInfoOutline>   
       </div>
   )
}


export default TestButton;