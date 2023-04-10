import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
const AppRibon = () => {
  return (
    <>
      <AppBar
        position="static"
        color="primary"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0 }}
          >
            Shibaku
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">マイページ</Button>
          <Button color="inherit">アップグレード</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2 }} />{' '}
    </>
  )
}

export default AppRibon
