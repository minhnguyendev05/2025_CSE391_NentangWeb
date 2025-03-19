import React, { useState } from 'react';

const LoginForm = () => {
  // State để lưu trữ giá trị email và password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập (gửi email và mật khẩu lên backend hoặc validation)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container" style={{height: '90vh'}}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card mt-5">
            <div className="card-body">
              <h4 className="card-title text-center">Đăng Nhập</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Đăng Nhập</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LoginForm;
