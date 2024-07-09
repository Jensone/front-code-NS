import { useEffect, useState } from "react";

interface Code {
    id: number,
    uuid: string,
    content: string,
    url: string,
}

interface Codes {
    codes: Code[],
}
export default function Update({ code }: { code: Code }) {
    
    const apiUrl = "http://localhost:3000/code/" + code.id;
    // égale à "http://localhost:3000/code/8";
    const updateCode = async () => {
        const response = await fetch(apiUrl,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(code) 

            });
        console.log('La mise à jour est complétée');
    }

    useEffect(() => {
        updateCode();
    }, []);

    return (
        <div>
            <h1>Update</h1>
        </div>
    );
}