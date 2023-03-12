import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

type TabProp = {
  label: string
  Component: JSX.Element
}

type TabsProps = {
  tabs: TabProp[]
}

export function Tabs({ tabs }: TabsProps) {
  const [value, setValue] = React.useState('0')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            TabIndicatorProps={{
              style: {
                backgroundColor: '#b05d5f',
                height: '3px'
              }
            }}
            onChange={handleChange}
            aria-label='Tabs'
          >
            {tabs.map((e, i) => (
              <Tab
                classes={{
                  selected: 'text-red-100'
                }}
                sx={{
                  color: '#a4a4a4'
                }}
                key={i}
                label={e.label}
                value={i.toString()}
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((e, i) => (
          <TabPanel sx={{ paddingLeft: 0 }} key={i} value={i.toString()}>
            {e.Component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}
