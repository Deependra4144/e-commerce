import { useState } from "react"
import PropTypes from "prop-types";
import toast from "react-hot-toast";
const ChangeAddress = ({setAddress,setIsModalOpen}) => {
    const [newAddress,setNewAddress] = useState('')
    const handleChangeAddress = (e)=>{
      setNewAddress(e.target.value)
    }
    const handleSaveAddress = ()=>{
        if(newAddress){
            setAddress(newAddress)
            setIsModalOpen(false)
            toast.success('Address Changed successfully')
        }
    }
    const closeModal = () =>{
        setIsModalOpen(false)
    }
  return (
    <div>
        <input type="text" 
            value={newAddress}
            onChange={(e)=>handleChangeAddress(e)}
            placeholder="Enter new address"
            className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end">
            <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded mr-2">Cancel</button>
            <button onClick={handleSaveAddress} className="bg-blue-500 text-white py-2 px-4 rounded">Save Address</button>
        </div>
    </div>
  )
}
ChangeAddress.propTypes = {
    setAddress:PropTypes.func.isRequired,
    setIsModalOpen:PropTypes.func.isRequired
}
export default ChangeAddress