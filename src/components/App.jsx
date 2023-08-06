import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { Movies, Profile, Actors, MovieInformation, Navbar } from '../components/index'
import classes from './styles.module.css'

const App = () => {
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Routes>
                    <Route path='/' element={<Movies />} />
                    <Route path='/movie/:id' element={<MovieInformation />} />
                    <Route path='/actors/:id' element={<Actors />} />
                    <Route path='/profile/:id' element={<Profile />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
