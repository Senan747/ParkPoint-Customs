import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Button from "../../components/Button";
import component from "@/assets/svg/component.svg";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div>
      <div className={styles.first_part}>
        <div>
          <div>
            <p className={styles.title}>
              Dayanacaq tapmaq üçün <span>daha ağıllı yol</span>
            </p>
            <p className={styles.alt_title}>
              Azərbaycan gömrüyündə asan və rahat parklanma. Növbəsiz və
              effektiv bir xidmət üçün dayanacaq yerlərimizi indi rezervasiya
              edin.
            </p>
          </div>
          <div className={styles.form}>
            <div>Saatlıq/Gündəlik</div>
            <div>Aylıq</div>
            <div>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="Kod"
                  variant="outlined"
                  placeholder="abc"
                />
              </FormControl>

              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                >
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker label="Başlanğıc tarix" />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker label="Bitiş tarix" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <Button
                onClick={() => console.log("show")}
                text="Dayanacaq yerlərini göstərin"
              />
            </div>
          </div>
        </div>
        <div>
          <img src={component} alt="" />
        </div>
      </div>
      <div className={styles.second_part}>
        <div>
          <p>Gömrükdə Avtomobil Parkı Üçün Asan Bələdçi</p>
        </div>
        <div className={styles.cycle_total_container}>
          <div>
            <div className={`${styles.cycle} ${styles.first_cycle}`}>
              <p>
                Addım <br />
              </p>
              <p>1</p>
            </div>
            <div>
              <p>
                Park etmək istədiyiniz gömrük məntəqəsini və tarixləri seçərək
                mövcud park variantlarına baxın.
              </p>
            </div>
          </div>
          <div>
            <div className={`${styles.cycle} ${styles.second_cycle}`}>
              <p>
                Addım <br />
              </p>
              <p>2</p>
            </div>
            <div>
              Park variantlarını diqqətlə araşdırın və sizin üçün ən uyğun olanı
              seçin.
            </div>
          </div>
          <div>
            <div className={`${styles.cycle} ${styles.third_cycle}`}>
              <p>
                Addım <br />
              </p>
              <p>3</p>
            </div>
            <div>
              <p>
                Avtomobilinizin nömrə nişanı və digər məlumatları daxil edərək
                rezervasiya edin.
              </p>
            </div>
          </div>
          <div>
            <div className={`${styles.cycle} ${styles.fourth_cycle}`}>
              <p>
                Addım <br />
              </p>
              <p>4</p>
            </div>
            <div>
              <p>
                Ödənişi təhlükəsiz şəkildə təsdiqləyin və e-poçtunuza təsdiq
                bildirişi alın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
