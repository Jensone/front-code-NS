import { useEffect, useState } from "react";

export default function Delete({ id }: { id: number }) {
    
    const apiUrl = "http://localhost:3000/code/" +id;
    // égale à "http://localhost:3000/code/10";
    const deleteCode = async () => {
        const response = await fetch(
            apiUrl,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log('La suppression est complétée');
    }

    return (
        <div>
            <h1>Delete</h1>
            <button onClick={deleteCode}>Supprimer</button>
        </div>
    );
}