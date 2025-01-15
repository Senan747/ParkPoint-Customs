import React, { useState } from "react";
import { Modal } from "@mui/material";
import styles from "./Login.module.scss";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import apple from "@/assets/svg/apple.svg";
import facebook from "@/assets/svg/facebook.svg";
import google from "@/assets/svg/google.svg";
import { useNavigate } from "react-router-dom";

interface LoginPopupProps {
  open: boolean;
  close: () => void;
}

function LoginPopup({ open, close }: LoginPopupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    navigate("/register");
    close();
  };

  return (
    <Modal open={open} onClose={close}>
      <div className={styles.login_container}>
        <FormControl sx={{ minWidth: 329, marginBottom: "36px" }}>
          <TextField
            label="E-mail"
            placeholder="E-mailinizi daxil edin"
            fullWidth
          />
        </FormControl>
        <FormControl sx={{ minWidth: 329 }}>
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
        <p className={styles.forget_password_text}>Şifrəni unutmusunuz?</p>
        <button>Daxil ol</button>
        <div className={styles.form_footer}>
          <p className={styles.login_options}>
            və ya aşağıdakılar ilə daxil ol
          </p>
          <div className={styles.social_buttons}>
            <img src={google} alt="Google ilə qeydiyyat" />
            <img src={facebook} alt="Facebook ilə qeydiyyat" />
            <img src={apple} alt="Apple ilə qeydiyyat" />
          </div>
          <p className={styles.navigate_register}>
            Hesabınız yoxdur?{" "}
            <span onClick={handleRegister}>Qeydiyyatdan keç</span>
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default LoginPopup;
