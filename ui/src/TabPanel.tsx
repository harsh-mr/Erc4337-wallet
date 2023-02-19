import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Verify from './tabs/Verify';
import Deploy from './tabs/Deploy';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}



function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '' }}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        indicatorColor={"secondary"}
        textColor={"secondary"}
        style={{ display: "flex", justifyContent: "center" }}

        // variant="scrollable"
        // scrollButtons="auto"
        // allowScrollButtonsMobile={true}
        // aria-label="scrollable auto tabs example"
        centered
        >
         
          <Tab style={{ marginLeft: '-6%' }} label={<div style={{display:'flex'}}><span style={{ fontWeight:'bold' ,color: 'rgb(239, 20, 169)',    fontFamily: 'PatsySans'
    ,fontSize: '228%'}}>ZUPP</span> <span style={{ fontWeight:'bold' ,color: 'white',    fontFamily: 'PatsySans'
    ,fontSize: '228%'}}>-Wallet</span> </div>} {...a11yProps(0)} disabled />
          <Tab style={{ marginLeft: '52%' }}label={<span style={{ color: 'white' }}>Deploy wallet</span>} {...a11yProps(1)} />
          <Tab label={<span style={{ color: 'white' }}>Send Funds</span>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={1}>
        <Container><About /></Container>
      </TabPanel> */}
      <TabPanel value={value} index={1}>
        <Container><Deploy /></Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Verify />
      </TabPanel>
    </Box>
  );
}
