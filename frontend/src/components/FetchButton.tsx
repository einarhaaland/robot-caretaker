import { useState } from 'react';

function FetchButton() {
    const [result, setResult] = useState<{status: number}>()

    const handleClick = () => {
        console.log("TESTING ROBOT CONNECTION..")
        fetch("/test_robot_connection")
            .then((res) => res.json())
            .then((data) => {
                setResult(data)
                console.log("..DONE")
            })
    }

    return (
        <>
            <button onClick={handleClick}>TEST ROBOT CONNECTION</button>
            <p>{result && "STATUS: " + result.status}</p>
        </>
    );
}

export default FetchButton;
