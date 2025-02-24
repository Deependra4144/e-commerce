import PropTypes from 'prop-types'

function Register({setIsLogin,setisModalOpen}) {
    const moveToLogin = () =>{
        setIsLogin(true)
        setisModalOpen(false)
      
      }
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>      
    <form action="">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input type="text" className="w-full px-3 py-2 border" placeholder="Enter Your Email Address"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input type="email" className="w-full px-3 py-2 border" placeholder="Enter Your Email Address"/>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input type="password" className="w-full px-3 py-2 border" placeholder="enter your password"/>
      </div>
      <div className="mb-4">
        <button className="w-full bg-red-600 text-white py-2">Sign Up</button>
      </div>
    </form>
    <div className="text-center flex justify-center gap-2">
      <span className="text-gray-700">All ready have an Account</span>
      <button className="text-red-800 font-bold" onClick={moveToLogin}>Login</button>
    </div>
</div>
  )
}

Register.propTypes = {
    setIsLogin : PropTypes.boolean.isRequired,
    setisModalOpen : PropTypes.boolean.isRequired
}
export default Register
