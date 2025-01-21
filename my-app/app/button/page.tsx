"use client"

import { ButtonSuccess, ButtonWarning, ButtonDanger, ButtonOutlineSucces, ButtonOutlineWarning, ButtonOutlineDanger } from "@/components/button"

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
            <ButtonOutlineSucces type="button" className="ml-2" onClick={() => alert("Succes outline button clicked!")}>
               Succes Outline Button
           </ButtonOutlineSucces>
           <ButtonOutlineWarning type="button" className="ml-2" onClick={() => alert("Warning outline button clicked!")}>
               Warning Outline Button
           </ButtonOutlineWarning>
           <ButtonOutlineDanger type="button" className="ml-2" onClick={() => alert("Danger outline button clicked!")}>
               Danger Outline Button
           </ButtonOutlineDanger>
        </div>
    )
 }
 
export default TestButton;