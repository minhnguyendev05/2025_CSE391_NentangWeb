import React from 'react';

const Header = () => {
    return (
        <header className="bg-dark text-white p-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <a href="/" className="text-white text-decoration-none h3">Logo</a>
                    
                    {/* Navbar */}
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Giới thiệu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Dịch vụ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Liên hệ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
