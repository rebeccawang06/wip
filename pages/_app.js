import * as React from 'react'
import NextApp from 'next/app'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Component {...pageProps} />
        <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'center', height: '90vh',flexDirection: 'column', textAlign: 'left', marginLeft: '50px'}}>
          <img src="https://play-lh.googleusercontent.com/i-0HlK6I-K5ZVI28HFa4iXz0T22Mg2WjQ4gMsEYvqmSNdifp2NE41ZiaUCavmbIimQ=s180-rw" style={{ width: '5%', height: '8%'}}></img>
          
          <h1 style={{marginBottom:'0px'}}>Work in Progress</h1>
          <h2 style={{marginBottom:'2px'}}>Try:</h2>
          <ul style={{marginBottom:'2px'}}>
            <li>Coming back in 1-2 weeks</li>
            <li>Contact me at <a href="mailto:hello@rbccawang.com" style={{ color: '#0096FF', textDecoration: 'none'}}>hello@rbccawang.com</a></li>
            <li><a href="https://www.linkedin.com/in/rebeccawang06/" style={{ color: '#0096FF', textDecoration: 'none'}}>Message me on LinkedIn</a></li>
          </ul>
          <h3>ERR_CHECK_LATER_WIP</h3>
        </div>
      </ThemeProvider>
    )
  }
}
