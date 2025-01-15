import styles from "./Auth.module.scss";
import apple from "@/assets/svg/apple.svg";
import facebook from "@/assets/svg/facebook.svg";
import google from "@/assets/svg/google.svg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Şifrələr uyğun gəlmir!");
      return;
    }
    alert("Qeydiyyat uğurla tamamlandı!");
  };

  return (
    <div className={styles.total_container}>
      <div className={styles.content_container}>
        <div>
          <h1>Qeydiyyat</h1>
          <p>Qeydiyyatdan keçmək üçün zəhmət olmasa məlumatlarınızı doldurun</p>
        </div>
        <div className={styles.form_container}>
          <div>
            <FormControl sx={{ minWidth: 290, marginRight: "20px" }}>
              <TextField
                label="Ad"
                placeholder="Adınızı daxil edin"
                fullWidth
              />
            </FormControl>
            <FormControl sx={{ minWidth: 290 }}>
              <TextField
                label="Soyad"
                placeholder="Soyadınızı daxil edin"
                fullWidth
              />
            </FormControl>
          </div>

          <FormControl sx={{ minWidth: 600 }}>
            <TextField
              label="E-mail"
              placeholder="E-mailinizi daxil edin"
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ minWidth: 600 }}>
            <TextField
              label="Nömrə"
              placeholder="Nömrənizi daxil edin"
              fullWidth
            />
          </FormControl>

          <div>
            <FormControl sx={{ minWidth: 290, marginRight: "20px" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Şifrə
              </InputLabel>
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

            <FormControl sx={{ minWidth: 290 }}>
              <InputLabel htmlFor="outlined-adornment-confirm-password">
                Təkrar şifrə
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Təkrar şifrənizi daxil edin"
                label="Təkrar şifrə"
              />
            </FormControl>
          </div>
        </div>

        <div className={styles.form_footer}>
          <p>və ya aşağıdakılar ilə qeydiyyatdan keç</p>
          <div className={styles.social_buttons}>
            <img src={google} alt="Google ilə qeydiyyat" />
            <img src={facebook} alt="Facebook ilə qeydiyyat" />
            <img src={apple} alt="Apple ilə qeydiyyat" />
          </div>
          <button onClick={handleSubmit}>Qeydiyyatdan keç</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
