function EventLoop(){
    function check()
    {
        console.log("start");
        setTimeout(function cb() {
            console.log("timer");
        }, 5000);
        console.log("end");
    }
    return(
        <>
            {check()}
        </>
    )
}
export default EventLoop;