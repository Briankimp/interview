import AuthForm from "./components/AuthForm";

export default function SignInPage() {
  return <AuthForm />;
}

{/* <Typography variant="h5" fontWeight={600}   textAlign="center" sx={{ fontSize: 34 }}>
Sign In
</Typography>

<Box
sx={{
gap: 2.5
}}
>
<TextField
fullWidth
variant="outlined"
margin="normal"
defaultValue="Email"
InputProps={{
    sx:{ borderRadius:36,  px: 2.125, py: 3.75,  width: 396, height: 61, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.25}
}}

/>
<TextField
fullWidth                
variant="outlined"
type="text"
margin="normal"
defaultValue="Password"
InputProps={{
    endAdornment: (
        <IconButton
        aria-label="toggle password visibility"
       onClick={handleClickShowPassword}
        
        >
           {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    ),
    sx:{ borderRadius:36,  px: 2.125, py: 3.75,  width: 396, height: 61}
}}



/>
</Box>

<Stack direction="row" width="100%" justifyContent="space-between" alignItems="center" mt={1}>
<FormControlLabel
  control={<Checkbox defaultChecked size="small" />}
  label={<Typography fontSize={14}>Remember me</Typography>}
/>
<Typography fontSize={14} color="primary" sx={{ cursor: 'pointer',  fontWeight: 600, }}>
  Forget password?
</Typography>
</Stack>

<Button
          variant="contained"
          endIcon={<ArrowForward sx={{ fontSize: 24 }} />}
          color="primary"
          sx={(theme) => ({
            pt: 2,
            pb: 2,
            pr: 12,
            pl: 14,
            borderRadius: 46,
            gap: 2.5,
            height: 64,
            width: 396
            
          })}
        >
         <Typography  sx={{
fontSize: 18,
fontWeight: 500,
color: "#FFFFFF",
width: 91,
height: 27,
textAlign: "center",
lineHeight: "27px", 
display: "inline-block"
}}>CONTINUE</Typography>
</Button>

<Typography variant="body2" align="center"  >
New here?{' '}
<Typography component="span" color="primary" sx={{ cursor: 'pointer', fontWeight: 600, fontSize: "14px", lineHeight: 1, textDecoration: 'underline' }}>
  Sign up
</Typography>
</Typography>

<Button
fullWidth
variant="outlined"
startIcon={<Image src="/google.svg" alt="Google" width={24} height={28} />}
sx={(theme) => ({
  textTransform: 'none',
  borderRadius:46,
  height: 61,
  width: 396
})}
>
Sign in with Google
</Button> */}