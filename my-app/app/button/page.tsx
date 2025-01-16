"use client"

import { ButtonSuccess, ButtonWarning, ButtonDanger } from "@/components/button"

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
        </div>
    )
 }
 
export default TestButton;