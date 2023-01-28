import React, { useState } from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import "../add/add.scss";
import Helmet from "react-helmet";
import { AddSchema } from '../../schema/AddSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const Add = () => {
  const [data, setData] = useState({ name: "", image: "", description: "" })

  function handleChange(e) {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  function handleClick() {
    if (!data.name || !data.image || !data.description) return
    else {
      const URL = "http://localhost:8080/description";
      axios.post(URL, data);
    }
    setData({ name: "", image: "", description: "" })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddSchema) })
  const formData = (data) => {
    console.log(data);
  }

  return (

    <div className='add-page'>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className='add-style'>
        <form onSubmit={handleSubmit(formData)}>
          <input {...register("name")} name="name" type="text" onChange={(e) => handleChange(e)} placeholder="Name..." />
          {errors.name ? (
            <span style={{ color: "red" }}>{errors.name.message}</span>) : (<></>)
          }
          <input {...register("image")} name="image" type="text" onChange={(e) => handleChange(e)} placeholder="Image..." />
          {errors.image ? (
            <span style={{ color: "red" }}>{errors.image.message}</span>) : (<></>)
          }
          <input {...register("description")} name="description" type="text" onChange={(e) => handleChange(e)} placeholder="Description..." />
          {errors.description ? (
            <span style={{ color: "red" }}>{errors.description.message}</span>) : (<></>)
          }
          <button className='add-btn' onClick={handleClick}>Add</button>
        </form>
      </div>
    </div>

  )
}

export default Add