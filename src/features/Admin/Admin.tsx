import React, { useState } from "react";
import styles from "./Admin.module.scss";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

function Admin() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      {" "}
      <div className={styles.login_container}>
        <h1>Admin</h1>

        <FormControl sx={{ minWidth: "100%" }}>
          <TextField
            label="E-mail"
            placeholder="E-mailinizi daxil edin"
            fullWidth
            value={email}
            onChange={handleChangeEmail}
          />
        </FormControl>
        <FormControl
          sx={{ minWidth: "100%", marginTop: "36px", marginBottom: "22px" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">Şifrə</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Şifrə"
          />
        </FormControl>
        <Button onClick={handleLogin} text="Daxil ol" />
      </div>
    </div>
  );
}

export default Admin;
