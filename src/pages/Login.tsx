import { useState, useRef } from "react"

interface LoginForm {
  username: string
  password: string

}


const Login = () => {
  const [isLogin, setIsLogin] = useState(false)

  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: ""
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!usernameRef.current || !passwordRef.current) return
    setFormData({
      username: usernameRef.current.value,
      password: passwordRef.current.value
    })

    // Comprobacion

    setIsLogin(true)
  }

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      {isLogin ?
        <>Ya estas logueado!!!</>
        :
        <form onSubmit={handleSubmit}>
          <input ref={usernameRef} type="text" placeholder="Tu nombre de usuario" />
          <br />
          <input ref={passwordRef} type="password" placeholder="Tu contraseña" />
          <br />
          <button type="submit">Login</button>
        </form>
      }
    </div>
  )
}

export default Login
