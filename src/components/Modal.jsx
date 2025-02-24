import PropTypes from "prop-types"
function Modal({isModalOpen,setIsModalOpen,children}) {
    const closeModal = ()=>{
        setIsModalOpen(false)   
    }
    if(!isModalOpen){ 
        return (null) 
    }else{
       return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-300 text-3xl">&times;</button>
            <div>{children}</div>
        </div>
    </div>
       )
    }


}
Modal.propTypes = {
    isModalOpen:PropTypes.bool.isRequired,
    setIsModalOpen:PropTypes.func.isRequired,
    children:PropTypes.func.isRequired
    
}

export default Modal
