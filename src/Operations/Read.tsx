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
export default function Read() {
    const [url, setUrl] = useState<string>('eFa');
    const [codes, setCodes] = useState<Codes>();
    
    const apiUrl = "http://localhost:3000/code?url=" + url;
    // égale à "http://localhost:3000/code?url=eFa";
    const getCode = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCodes(data);
        console.log(data);
    }

    useEffect(() => {
        getCode();
    }, []);

    return (
        <div>
            <h1>Read</h1>
        </div>
    );
}