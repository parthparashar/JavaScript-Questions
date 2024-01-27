// import './RelAbs.css';
// function RelAbs() {
//     return(
//         <div className='parent'>
//             <div className="one">one</div>
//             <div className="two">two</div>
//             <div className="three">three</div>
//         </div>
//     );
// }

// export default RelAbs;
function RelAbs() 
{
    function fetchDataFromServerPromise(url) {
        return new Promise((resolve, reject) => {
          // Simulating asynchronous operation
          setTimeout(() => {
            const success = true; // Change to false to simulate rejection
            if (success) {
              const data = { example: "data" };
              resolve(data);
            } else {
              reject("Failed to fetch data");
            }
          }, 1000);
        });
      }
      
      // Using the promise with a callback
      fetchDataFromServerPromise("https://api.example.com/data")
        .then((result) => {
          console.log("Data received:", result);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      
}
export default RelAbs;