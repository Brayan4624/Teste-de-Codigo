import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Eye, EyeOff, User, Lock } from 'lucide-react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular login
    setTimeout(() => {
      setIsLoading(false)
      alert('Login realizado com sucesso!')
    }, 2000)
  }

  return (
    <div className="login-container">
      {/* Background com gradiente fluido */}
      <div className="background-gradient"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Card de Login */}
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Bem-vindo</h1>
          <p className="login-subtitle">Faça login em sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Campo Email */}
          <div className="input-group">
            <div className="input-wrapper">
              <User className="input-icon" size={20} />
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                required
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="input-group">
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Lembrar-me e Esqueci senha */}
          <div className="form-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
              Lembrar-me
            </label>
            <a href="#" className="forgot-password">
              Esqueci minha senha
            </a>
          </div>

          {/* Botão de Login */}
          <Button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              'Entrar'
            )}
          </Button>
        </form>

        {/* Divisor */}
        <div className="divider">
          <span>ou</span>
        </div>

        {/* Botões sociais */}
        <div className="social-buttons">
          <button className="social-button google">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar com Google
          </button>
          
          <button className="social-button facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continuar com Facebook
          </button>
        </div>

        {/* Link para cadastro */}
        <div className="signup-link">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </div>
      </div>
    </div>
  )
}

export default App

