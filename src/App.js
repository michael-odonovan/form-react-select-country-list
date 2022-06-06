import './App.css';
import React, { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function App() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log("form errors", errors)

  return (

    <form onSubmit={handleSubmit((data) => {
      console.log(data)
    })}>

      <div className="field-wrapper">
        <label>first name:</label>
        <input {...register("firstName", { required: true })}/>
      </div>

      <div className="field-wrapper">
        <label>second name:</label>
        <input {...register("secondName", { required: true })}/>
      </div>

      <div className="field-wrapper">
        <label>postcode:</label>
        <input {...register("postcode", { required: true })}/>
      </div>

      <div className="field-wrapper">
        <label>country:</label>
        <Select options={options} value={value} onChange={changeHandler} />
      </div>

      <input className="submit-button" type="submit"/>

    </form>

  );
}

