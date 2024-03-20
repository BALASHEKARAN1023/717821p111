import React from 'react'
import { Row, Col, Form, Input } from "antd";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='bg-slate-400 lg:justify-center items-center'>
      <Row gutter={16} className='flex justify-center items-center'>
        <Col xs={24} lg={16} className="lo-img" style={{ position: 'relative' }}>
        </Col>
        <Col lg={8} className='text-left justify-center items-center p-5'>
          <Form layout='vertical' className=' p-5'>
            <h1 className='text-white'>Login</h1>
            <hr />
            <Form.Item name='username'className='text-white' label='Username' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='password' className='text-white' label='Password' rules={[{ required: true }]}>
              <Input.Password />
            </Form.Item>
            <div >


              <button className='btn1 mt-2'>
                Login

              </button>

            </div>

            <hr />
            <Link to='/register'>Click Here to Register</Link>







          </Form>
        </Col>

      </Row>

    </div>
  )
}

export default Login