import PropTypes from 'prop-types'
function Login({setIsLogin,setisModalOpen}) {
  const moveToSign = () =>{
    setIsLogin(false)
    setisModalOpen(true)
  
  }
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>      
        <form action="">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border" placeholder="Enter Your Email Address"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-3 py-2 border" placeholder="enter your password"/>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="" className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox"/>
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
              <a href="" className="text-red-800">Forget Password</a>
          </div>
          <div className="mb-4">
            <button className="w-full bg-red-600 text-white py-2">Login</button>
          </div>
        </form>
        <div className="text-center flex justify-center gap-2">
          <span className="text-gray-700">{"Don't"} have an Account</span>
          <button className="text-red-800 font-bold" onClick={moveToSign}>Sign Up</button>
        </div>
    </div>
  )
}

Login.propTypes = {
    setIsLogin : PropTypes.boolean.isRequired,
    setisModalOpen : PropTypes.boolean.isRequired
}

export default Login
