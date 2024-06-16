import { useState } from "react"


const useSignup = () => {
  const [loading, setLoading] = useState(false)

  const signup = async ({fullName,userName,password,confirmPassword, gender}) => {
   const success =  handleInputErrors({fullName,userName,password,confirmPassword, gender})
   if(!success) return;

   setLoading(true)
   try {
     const res  = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({fullName,userName,password,confirmPassword, gender})

     })
     const data = await res.json();
     console.log(data)

   } catch (error) {
    toast.error(error.message)
   } finally {
     setLoading(false)
   }

  }

  return {loading,signup}

}

export default useSignup



function handleInputErrors({fullName,userName,password,confirmPassword, gender}) {
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error('please fill in all the Fields')
        return false
    }

    if(password !== confirmPassword) {
        toast.error("Password and confirm Password should be same")
        return false
    }

    if(password.length < 6) {
        toast.error("password must have 6 characters")
        return false
    }

    return success
}