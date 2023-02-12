import { useState } from "react";

function LoginCompo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/";
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2 className="login-para">Login</h2>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                 placeholder="Enter Email" required/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                 placeholder="Password" minLength={8} required/>
            </div>
            <div className="submit">
                <button className="btn" type="submit">Log in</button>
            </div>
        </form>
    );
}

export default LoginCompo;