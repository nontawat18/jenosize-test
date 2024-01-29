import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreateIcon from '@mui/icons-material/Create';
import SendIcon from '@mui/icons-material/Send';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SettingsIcon from '@mui/icons-material/Settings';



export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(3);
  const ref = React.useRef(null);
 

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className='navigation'
        >
          <BottomNavigationAction label="Write" icon={<CreateIcon />} />
          <BottomNavigationAction label="Approve" icon={<CheckCircleIcon />} />
          <BottomNavigationAction label="Report" icon={<SendIcon />} />
          <BottomNavigationAction label="Statistic" icon={<WatchLaterIcon />} />
          <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

