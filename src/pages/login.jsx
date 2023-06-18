import DashboardIcon from "../assets/dashboard.svg";
import DashboardProfile from "../assets/dashboardProfile.svg";
import DashboardWithdrawal from "../assets/dashboardWithdrawal.svg";

// Go Back
// Log In
// Welcome back, traveller!
// Email
// Your Email address
// Password
// ••••••••
// Remember me
// Forgot password
// Log In
// Sign Up
// Don&apos;t have an account?
const Login = () => {
  return (
    <div>
      <img className="dash-icon" src={DashboardIcon} alt="" />
      <img className="dash-profile" src={DashboardProfile} alt="" />
      <img className="dash-withdrawal" src={DashboardWithdrawal} alt="" />
    </div>
  );
};

export default Login;
