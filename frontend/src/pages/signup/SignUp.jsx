import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"


const SignUp = () => {
      const [inputs, setInputs]= useState({
        fullName:"",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
      })
  
  const {loading,signup}=useSignup()

      const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
      }

const handleSubmit = async (e) => {
  e.preventDefault()
    await signup(inputs)
}

  return (
    <div className="flex items-center min-w-96 mx-auto ">
     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
     <h1 className="text-3xl font-semibold text-center text-gray-300"> 
        Signup
        <span className="text-blue-500"> ChatApp</span>
        </h1>
        
        <form onSubmit={handleSubmit}>
        <div>
        <label className="label p-2 ">
        <span className="text-base label-text">Full Name</span>
        </label> 
        <input type="text" placeholder="Enter Name" className="w-full input input-bordered h-10" 
         value={inputs.fullName}
         onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
        />
        </div>

        <div>
            <label className="label p-2 ">
                <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"
            value={inputs.userName}
            onChange={(e) => setInputs({...inputs, userName: e.target.value})}
             />
            </div>
            
            <div>
            <label className="label p-2 ">
                <span className="text-base label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
             
            </div>

            <div>
            <label className="label p-2 ">
                <span className="text-base label-text">Confirm Password </span>
            </label>
            <input type="text" placeholder="Cofirm Password " className="w-full input input-bordered h-10" />
            </div>
       
           <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

            <Link to={"/login"} href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Already  have an account?  </Link>
            <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
             </div>
        </form>
     </div>

    </div>
  )
}

export default SignUp

// starter code 

// import GenderCheckBox from "./GenderCheckBox"


// const SignUp = () => {
//   return (
//     <div className="flex items-center min-w-96 mx-auto ">
//      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//      <h1 className="text-3xl font-semibold text-center text-gray-300"> 
//         Signup
//         <span className="text-blue-500"> ChatApp</span>
//         </h1>
        
//         <form>
//         <div>
//         <label className="label p-2 ">
//         <span className="text-base label-text">Full Name</span>
//         </label> 
//         <input type="text" placeholder="Enter Name" className="w-full input input-bordered h-10" />
//         </div>

//         <div>
//             <label className="label p-2 ">
//                 <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//             </div>
            
//             <div>
//             <label className="label p-2 ">
//                 <span className="text-base label-text">Password</span>
//             </label>
//             <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//             </div>

//             <div>
//             <label className="label p-2 ">
//                 <span className="text-base label-text">Confirm Password </span>
//             </label>
//             <input type="text" placeholder="Cofirm Password " className="w-full input input-bordered h-10" />
//             </div>
       
//            <GenderCheckBox />

//             <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Already  have an account?  </a>
//             <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//              </div>
//         </form>
//      </div>

//     </div>
//   )
// }

// export default SignUp