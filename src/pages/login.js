import React from 'react'

import LoginForm from '../components/login-form'
import backgroundImage from '../assets/imgs/login-background.jpg'

const styles = {
  container: {
    objectFit: 'cover',
    height: '100vh',
    position: 'relative'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  form: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

const Login = () => (
  <div style={styles.container}>
    <img style={styles.image} src={backgroundImage} alt='Background' />
    <LoginForm style={styles.form} />
  </div>
)

export default Login
