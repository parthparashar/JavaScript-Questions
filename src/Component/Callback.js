function Callback(){
    function add(data,callback)
    {
        const myarr =[];
        data.forEach(x => {
            if(callback(x))
            {
                myarr.push(x);
            }
        });
        console.log(myarr);
    }
    const myNumbers = [4, 1, -20, -7, 5, 9, -6];
    add(myNumbers,(x)=> x>0)

    //another example for callback
    // function greet(name)
    // {
    //     console.log(`${name}`);
    // }
    // function greetParth(callback)
    // {
    //     const name ='Parth';
    //     callback(name)
    // }
    // greetParth(greet)
}
export default Callback;