import React from 'react'
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

import { palette } from '../config/theme'
import facebookLogo from '../assets/fonts/facebook.svg'
import googleLogo from '../assets/fonts/google.svg'
import twitterLogo from '../assets/fonts/twitter.svg'

const styles = {
  card: {
    overflow: 'visible',
    width: '30%',
    minWidth: '300px',
    maxWidth: '500px'
  },
  innerCard: {
    position: 'absolute',
    width: '90%',
    top: '-5%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: palette.primary.main
  },
  button: {
    margin: '2rem auto 1rem'
  },
  icon: {
    height: '1.6rem',
    width: 'auto'
  }
}

const LoginForm = ({ style }) => (
  <Card style={{...styles.card, ...style}} elevation={1}>
    <CardContent style={{ marginTop: '6rem' }}>
      <Card elevation={3} style={styles.innerCard}>
        <CardContent>
          <Typography style={{ color: '#fff' }} variant='h6' align='center' component='h3'>
            Log in
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ color: '#fff' }}>
            <img style={styles.icon} src={facebookLogo} alt='Facebook logo' />
          </Button>
          <Button style={{ color: '#fff' }}>
            <img style={styles.icon} src={twitterLogo} alt='Twitter logo' />
          </Button>
          <Button style={{ color: '#fff' }}>
            <img style={styles.icon} src={googleLogo} alt='Google logo' />
          </Button>
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
)

export default LoginForm
