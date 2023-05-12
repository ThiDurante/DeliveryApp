'use client';

import { useRouter } from 'next/navigation';
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useProductContext } from '../Context/store';
import { useEffect, useState } from 'react';

export function Navbar({ vendor }: any) {
  const { push } = useRouter();
  const { user } = useProductContext();
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    if (user && !vendor) setUserLoaded(true);
  }, []);

  const handleRedirect = () => {
    if (user.role === 'customer') push('/customer/orders');
    if (user.role === 'vendor') push('/vendor/orders');
  };

  const handleName = () => {
    if (vendor) {
      return vendor.name;
    } else if (userLoaded) {
      return user.name;
    } else {
      return 'Profile';
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="logo">
            Logo
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            ThiagoLivery
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => push('/customer/products')} color="inherit">
              Products
            </Button>
            <Button onClick={() => handleRedirect()} color="inherit">
              My Orders
            </Button>
            <Button onClick={() => push('/profile')} color="inherit">
              {handleName()}
            </Button>
            <Button onClick={() => push('/logout')} color="inherit">
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}
