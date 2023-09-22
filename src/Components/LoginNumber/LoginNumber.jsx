import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    number: Yup.string()
        .matches(/^(\+98|0)?9\d{9}$/, 'شماره موبایل معتبر نیست')
        .required('شماره موبایل الزامی است'),
});
export default function LoginNumber() {
    return (
        <div className='mt-3'>


            <Formik
                initialValues={{
                    number: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label className='pr-3 text-gray-600' htmlFor="number">شماره تلفن</label>
                            <Field placeholder="شماره تلفن" id="number" className="input-style " name="number" type="text" />
                            <ErrorMessage className='text-red' name="number" component="div" />
                        </div>
                        <div className=' my-5 font-medium'>
                            <button className='btn-orange'>ورود به سایت</button>
                        </div>
                        <div className='w-full h-1 bg-gray-200 rounded'></div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
