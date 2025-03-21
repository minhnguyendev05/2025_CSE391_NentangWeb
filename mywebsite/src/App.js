import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import UseEffect from './components/UseEffect'

const App = () => {
    return (
        <div>
            <Header />
            <LoginForm />
            {/* <UseEffect /> */}
            <Footer />
        </div>
    );
}

export default App;
