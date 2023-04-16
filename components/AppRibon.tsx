import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material'
const AppRibon = () => {
  return (
    <>
      <AppBar
        position="static"
        color="primary"
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 0 }}
          >
            Shibaku
          </Typography>
          {/*
          <Box sx={{ flexGrow: 1 }} />
          <Link
            href="/Pricing"
            underline="none"
            sx={{ color: 'inherit' }}
          >
            <Button color="inherit">アップグレード</Button>
          </Link>
  */}
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2 }} />{' '}
    </>
  )
}

export default AppRibon
