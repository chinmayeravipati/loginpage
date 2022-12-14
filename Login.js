import React, {useState} from 'react';

 const Login = () =>
 {
    const [email,setemail] = useState("");
    const [pass , setpass] = useState("");
	return(
<body>
<div >
        <form >
         
         <div>
         Login
         </div>
         
		<div>
            <label>Email</label>
            <input type="email" placeholder="abc@abc"  />
            </div>
            <div>
            <label>Password</label>
         <input type="password" placeholder='***' />
            </div>
            <button type='submit'>Login</button>

            </form>
            </div>
            </body>
      


            
	)
 }
 
 export default Login