
import axios from "axios";
import { useEffect, useState } from "react";

function Forget(){
    const[email, setEmail] =useState('');
    const [newpassword, setPassword] = useState('');
    useEffect(()=> {
        console.log('email is:', email);
        console.log('password is:',newpassword);
    },[email,newpassword])

    const handlesubmit = async() => {
        const response = await axios.post('http://localhost:2000/forget',{email,newpassword
    })
        if(response.data){
console.log(response.data);
        }
    }
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",backgroundColor:'lavender',height:'750px'}}>
            <h1>Update Password</h1>
            <input type="text" name="email"style={{width:"500px",padding:"10px"}}
            placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="newpassword" style={{width:"500px",padding:"10px"}} placeholder="Enter your newpassword" onChange={(e)=>setPassword(e.target.value)}/>
            <button style={{width:"500px",}} onClick={handlesubmit}>Update Password</button>
            

        </div>
    )
}
export default Forget;