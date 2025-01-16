import { Children, ReactNode } from "react";

type Props = {
    children: ReactNode;
    type: "button" | "submit" | "reset";
    onClick: () => void;
    className?: string;
}

export const ButtonSuccesa = ( {Children, type, onclick, className}: Props) => {
    return (
        <button className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-bold ${className}`} type={type} onClick={() => { if (onclick) onclick() }}>
            {Children}
        </button>
    )
}

ex