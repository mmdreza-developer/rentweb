import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react'

export default function LoginUserName() {
   
    return (
        <div>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = "نام کاربری را وارد کنید"


                    }
                    if (!values.password) {
                        errors.password = 'رمز عبور را وارد کنید';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    values.username = ""
                    values.password = ""
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className='mt-3'>
                            <label className='pr-3 text-dark' htmlFor="username">نام کاربری</label>
                            <Field id='username' name="username" className='input-style' type="text" placeholder='نام کاربری خود را وارد کنید' />
                            <ErrorMessage name="username" className='text-red' component="div" />
                        </div>
                        <div className='mt-3'>
                            <label className='pr-3 text-dark' htmlFor="password">رمزعبور</label>
                            <Field id='password' name="password" className='input-style placeholder:pr-3' type="password" placeholder='رمز عبور خود را وارد کنید' />
                            <ErrorMessage className='text-red' name="password" component="div" />
                            <div className='my-5 font-medium'>
                                <button type="submit" className='btn-orange' disabled={isSubmitting}>
                                    ورود به سایت
                                </button>
                            </div>
                            <div className='w-full h-1 bg-gray-200 rounded'></div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
