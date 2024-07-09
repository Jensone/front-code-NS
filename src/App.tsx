import { useState } from 'react';
import Read from './Operations/Read';
import Delete from './Operations/Delete';
import Update from './Operations/Update';
// import { v4 as uuidv4 } from 'uuid';


export default function App() {
    // const [user, setUser] = useState<string>(uuidv4());
    // console.log(user);
    const [saveStatus, setSaveStatus] = useState<boolean>(false);

    const [content, setContent] = useState<string>('');
    console.log(content);

    const autoSave = (e: any) => {
        setContent(e.target.value);

        setTimeout(() => {
            setSaveStatus(true);
            setTimeout(() => {
                setSaveStatus(false);
            }, 3000);
        }, 3000);
    }

    const updateCode = {
        "id": 9,
        "uuid": "c1a1c0d3b1d8-e5a9c2f0b5e8",
        "content": 'Je suis nouveau',
        "url": "tFp"
    };

    return (
        <div>
            <h1>Front Code</h1>
            <textarea
                onChange={autoSave}
            name="" id=""></textarea>
            <Read />
            <Delete id={5} />
            { saveStatus ? <Update code={updateCode} /> : 'Non sauvegardé' }
        </div>
    );
}
