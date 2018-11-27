import React from 'react'
import pink from '@material-ui/core/colors/pink'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import Face from '@material-ui/icons/Face'
import MailOutline from '@material-ui/icons/MailOutline'
import Lock from '@material-ui/icons/Lock'

import backgroundImage from '../assets/login-background.jpg'

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
  card: {
    position: 'absolute',
    overflow: 'visible',
    width: '30%',
    minWidth: '300px',
    maxWidth: '500px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  innerCard: {
    position: 'absolute',
    width: '90%',
    top: '-5%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: pink[400]
  },
  button: {
    margin: '2rem auto 1rem'
  }
}

const Login = () => (
  <div style={styles.container}>
    <img style={styles.image} src={backgroundImage} alt='Background' />
    <Card style={styles.card} elevation={1}>
      <CardContent style={{ marginTop: '6rem' }}>
        <Card elevation={3} style={styles.innerCard}>
          <CardContent>
            <Typography align='center' component='h3'>
              Log in
            </Typography>
          </CardContent>
          <CardActions>
            <Button>F</Button>
            <Button>T</Button>
            <Button>G</Button>
          </CardActions>
        </Card>
        <FormControl fullWidth>
          <InputLabel htmlFor='password-input'>
            First name
          </InputLabel>
          <Input id='password-input' type='text' endAdornment={
            <InputAdornment position='end'>
              <Face />
            </InputAdornment>
          } />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor='password-input'>
            Email
          </InputLabel>
          <Input id='password-input' type='email' endAdornment={
            <InputAdornment position='end'>
              <MailOutline />
            </InputAdornment>
          } />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor='password-input'>
            Password
          </InputLabel>
          <Input id='password-input' type='password' endAdornment={
            <InputAdornment position='end'>
              <Lock />
            </InputAdornment>
          } />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button style={styles.button} component='button' color='primary'>Let´s go</Button>
      </CardActions>
    </Card>
  </div>
)

export default Login
