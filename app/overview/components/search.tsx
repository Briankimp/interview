import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <TextField
  placeholder="Search"
  variant="outlined"
  size="small"
  sx={{
    width: 337,
    height: 44,
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px', 
      paddingRight: 1,
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px',
    },
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <SearchIcon sx={{ color: '#6F2C6F' }} />
      </InputAdornment>
    ),
  }}
/>
)
}

export default Search
