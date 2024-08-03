import React from 'react';
import THForm from '../../component/form/THForm';
import THInput from '../../component/form/THInput';
import { Col } from 'antd';
import bgImg from '../../assets/hero-5.jpg'
import { FieldValues, SubmitHandler } from 'react-hook-form';

const Login = () => {
    const onSubmit:SubmitHandler<FieldValues>=data=>{

        console.log(data);
    }
    return (
        <div className='flex justify-center items-center h-screen bg-cover' style={{backgroundImage:`URL(${bgImg})`}}>
            <Col xs={{span:20}} sm={{span:16}} md={{span:12}}  lg={{span:7}} xxl={{span:5}} className='bg-[#ffffff88] rounded-md font-semibold'>
            <THForm onSubmit={onSubmit}>
                <h1 className='text-2xl text-center uppercase font-semibold'>Admin Login</h1>
                {/* <Divider className=''></Divider> */}
                <THInput name='email' type='email' label='Email'></THInput>
                <THInput name='password' type='text' label='Password'></THInput>
                <button className='btn btn-neutral btn-md w-full mt-4 text-lg'>Login</button>
            </THForm>
            </Col>
        </div>
    );
};

export default Login;