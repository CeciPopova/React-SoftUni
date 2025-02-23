export default function BrokenTimer() {
    let timer = 1;

    // Does not work!!! 
    setInterval(() => {
        // console.log(timer);
        timer++;
    }, 1000);
    
    return (
        <>
            <h2>Broken Timer</h2>
            <div>{timer}</div>
            <hr />
        </>
    )
}
