import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { z } from 'zod';
import { registerValidation } from '@/utils/zod-validation';
import { routes } from '@/routes';
import axiosInstance from '@/utils/axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '@/redux/userSlice';
import ImageUploader from '@/components/ImageUploader/ImageUploader';
import { styles } from './styles.mui';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);

  type RegisterValidationType = z.infer<typeof registerValidation>;
  const formMethods = useForm<RegisterValidationType>({
    resolver: zodResolver(registerValidation),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      nickName: '',
      email: '',
      password: '',
      confirm: '',
    }
  });
  const { control, handleSubmit, formState: { isValid, errors } } = formMethods;
  const onSubmit = async (data: RegisterValidationType) => {
    try {
      let avatarUrl = null;
      if (file) {
        const formData = new FormData();
        formData.append("images", file);
        const { data: images } = await axiosInstance.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        avatarUrl = images.data.length > 0 ? images.data[0].url : null;
      }
      const res = await axiosInstance.post('/api/auth/register', { ...data, avatarUrl });
      const { uid } = res.data.userCreds.user;
      const { data: user } = await axiosInstance.get(`/api/users/${uid}`);
  
      dispatch(login(user));
      navigate(routes.PUBLIC.HOME);
    } catch (err) {
      dispatch(logout());
    }
  };
  

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      elevation={3}
      sx={styles.paper}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to WordSmith
      </Typography>
      <Box
        sx={styles.controllerWraper}
      >
        <ImageUploader setFile={setFile} />
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="FirstName"
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="LastName"
              variant="outlined"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="nickName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nickname"
              variant="outlined"
              error={!!errors.nickName}
              helperText={errors.nickName?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Repeat Password"
              type="password"
              variant="outlined"
              error={!!errors.confirm}
              helperText={errors.confirm?.message}
              fullWidth
            />
          )}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid}
        sx={styles.btn}
      >
        Sign Up
      </Button>
      <Box sx={styles.account}>
        <Typography variant="body2">Already have an account? </Typography>
        <Link to={routes.PUBLIC.LOGIN} style={{ textDecoration: 'none' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            Sign In
          </Typography>
        </Link>
      </Box>
    </Paper>
  );
};

export default SignUp;
