'use client'

import { useRouter } from 'next/navigation'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'

export default function Navbar () {
  const { push } = useRouter()
  const user = JSON.parse(localStorage.getItem('userdata') || '{}')
  console.log(user);
  
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton color="inherit" aria-label="logo">Logo</IconButton>
          <Typography component="div" sx={{flexGrow: 1}}>
            ThiagoLivery
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => push('/customer/products')} color="inherit">Products</Button>
            <Button onClick={() => push('/customer/orders')} color="inherit">My Orders</Button>
            <Button onClick={() => push('/profile')} color="inherit">{user.name}</Button>
            <Button onClick={() => push('/logout')} color="inherit">Logout</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  )
}
