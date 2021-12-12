import React,{useRef} from 'react'

const LoginForm = () => {//*
    const usernameRef = useRef();//*
    const passwordRef = useRef();//*

    const loginHandler = async (event) => {//*
        event.preventDefault();//*
        let user = {//*
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        try {//*
            const response = await fetch('https://react-http-test1-ea834-default-rtdb.firebaseio.com/users.json',{
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if(!response.ok){
                throw new Error(`Failed to login something wrong ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.log(error);//*
        }
    }

    return (
        <form onSubmit={loginHandler}>
            <input ref={usernameRef} type='text'/>
            <br/>
            <input ref={passwordRef} type='number'/>
            <br/>
            <button type='submit'>Login</button>
            
        </form>
    )
}

export default LoginForm
