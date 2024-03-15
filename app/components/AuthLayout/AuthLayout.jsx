import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation' 

function Protected({children, authentication = true}) {

  const authStatus = useSelector((state) => state.auth.status )

  const navigate = useRouter()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate.push("/login")
    } else if (!authentication && authStatus !== authentication ){
      navigate.push("/")
    }
    setLoader(false)
  }, [authStatus, authentication, navigate])

  return loader ? null : <>{children}</>
}

export default Protected


// if(true){
//   if (false) {
//     navigator("/login")
//   }
// }