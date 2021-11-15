import React, {useState} from 'react'
import Validation from './Validation'

function SignupForm(submitForm) {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.prentDefult();
        setErrors(Validation(values))
    };
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">JUST PRACTICE Create Account</h2>
                </div>
                <form className="form-wrapper">
                    {/* Username */}
                    <div className="name">
                        <label className="label">
                           Username 
                        </label>
                        <input className="input" type="text" name="UserName" value={values.username}
                        onChange={handleChange}/>
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    {/* Email */}
                    <div className="eamil">
                        <label className="label">
                           Email
                        </label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    {/* password */}
                    <div className="password">
                        <label className="label">
                           Password 
                        </label>
                        <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    {/* button */}
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default SignupForm
