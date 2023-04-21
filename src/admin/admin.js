import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

const Admin = () => {

  const formik=useFormik({

    initialValues:{

      name:'',

      password:''

    },

    validationSchema: yup.object({

      password: yup.string()

        .max(20, 'Name should not exceed 20 Characters')

        .required('Please Enter Employee Name'),


      email: yup.string()

        .email('Invalid email address')

        .required('Please Enter Email Id'),

    }),

    onSubmit:values=>{

      alert(JSON.stringify(values));

    }

  });

  return (
    <div>
        <div class="root">
       <div class="container">
       <form class="login">
  <div class="form-group"  onSubmit={formik.handleSubmit}>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" name="email" {...formik.getFieldProps("email")} id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    {formik.touched.email && formik.errors.email ? <span style={{color:'red'}}>{formik.errors.email}</span> : null}
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name="password" {...formik.getFieldProps("password")} id="exampleInputPassword1" placeholder="Password"/>
    {formik.touched.password && formik.errors.password ? <span style={{color:'red'}}>{formik.errors.password}</span> : null}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
       </div>
       </div>
    </div>
  )
}

export default Admin