import { Autocomplete, TextField, Button, Grid } from "@mui/material";
import useSportCategories from "../../hooks/useFilter"
import useLocations from "../../hooks/useFilter"
const Filter = () => {
    const { categories, loading, error } = useSportCategories(page, 5);
    const { locations, loading2, error2, fetchLocations } = useLocations(page, 5);

    const handleSearch = () => {
        console.log("Search clicked"), {
            category: selectedCategory,
            city: selectedCity,
            location: selectedLocation,
        };
        
    }
    return (
        <>
        <Grid container spacing={2} alignItems="center" style={{ backgroundColor: "#d32f2f", padding: "16px", borderRadius: "8px" }}>
      {/* Aktivitas */}
      <Grid item xs={12} sm={4}>
        <Autocomplete
          options={categories}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => setSelectedCategory(newValue)}
          renderInput={(params) => <TextField {...params} label="Aktivitas" placeholder="Activity" />}
        />
      </Grid>

      {/* Lokasi */}
      <Grid item xs={12} sm={4}>
        <Autocomplete
          options={(locations)} // Contoh opsi lokasi
          onChange={(event, newValue) => setSelectedCity(newValue)}
          renderInput={(params) => <TextField {...params} label="Lokasi" placeholder="Choose City" />}
        />
      </Grid>

      {/* Cabang Olahraga */}
      <Grid item xs={12} sm={4}>
        <Autocomplete
          options={categories}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => setSelectedCategory(newValue)}
          renderInput={(params) => <TextField {...params} label="Cabang Olahraga" placeholder="Choose Sport" />}
        />
      </Grid>

      {/* Button */}
      <Grid item xs={12} sm={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ width: "100%", height: "100%" }}
        >
          Temukan ➔
        </Button>
      </Grid>
    </Grid>
        </>
    )
}

export default Filter