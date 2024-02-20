import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import { themeSettings } from './theme'
import { useMemo } from 'react'

const App = () => {
	const mode = 'dark'
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
	return (
		<>
			<div className='app'>
				<ThemeProvider theme={theme}>
					<CssBaseline />
				</ThemeProvider>
			</div>
		</>
	)
}

export default App
