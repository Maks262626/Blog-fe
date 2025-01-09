import { loginValidation } from "@/utils/zod-validation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/routes";
import axiosInstance from "@/utils/axios";
import { useDispatch } from "react-redux";
import { login, logout } from "@/redux/userSlice";
import { styles } from "./styles.mui";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  type LoginValidationType = z.infer<typeof loginValidation>;
  const formMethods = useForm<LoginValidationType>({
    resolver: zodResolver(loginValidation),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const { control, handleSubmit, formState: { isValid, errors } } = formMethods;

  const onSubmit = async (data: LoginValidationType) => {
    try {
      const res = await axiosInstance.post('/api/auth/login', data);
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
        Sign In
      </Typography>

      <Box
        sx={styles.inputsWrapper}
      >
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

      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid}
        sx={styles.btn}
      >
        Sign In
      </Button>
      <Box sx={styles.account}>
        <Typography variant="body2">Don't have acc? </Typography>
        <Link to={routes.PUBLIC.REGISTER} style={{ textDecoration: 'none' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            Sign Up
          </Typography>
        </Link>
      </Box>
    </Paper>
  );
}

export default SignIn;