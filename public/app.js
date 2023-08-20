const f = document.querySelector('form');
const ip = document.querySelector('#myForm');

f.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    try{
        const data = ip.value;
        //console.log(data);
        const obj = {
            code: data
        };
        
        const res = await axios.post('/', obj);
        
        //console.log(res.data);

        alert(`ID: ${res.data}`)

        ip.value="";
    }

    catch(err){
        console.log("error");
    }

});