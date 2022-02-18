import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div>
        <div className="main-title">Create Hikers Account</div>
        <div className="sub-title">Be part of Hikers and start gaining!</div>

        <form>
          <label className="input-title">Username</label>
          <input className="input" type="text" placeholder="Username" />
          <label className="input-title">Full Name</label>
          <input className="input" type="text" placeholder="Full Name" />
          <label className="input-title">Email</label>
          <input className="input" type="text" placeholder="Email" />
          <label className="input-title">Password</label>
          <input className="input" type="text" placeholder="Password" />
          <label className="input-title">Confirm Password</label>
          <input className="input" type="text" placeholder="Confirm Password" />
          <div>
            <input
              type="submit"
              className="signup-button"
              value="Create Account"
            ></input>
          </div>
        </form>

        <div>
          Already registered? <span className="links">Log In</span>
        </div>
      </div>
    </div>
  );
};
// }
export default Signup;