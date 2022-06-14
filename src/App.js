import './App.css';
import React, { useState, useMemo } from 'react'

import { useForm } from 'react-hook-form'

import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function App() {

  const countryOptions = useMemo(() => countryList().getData(), [])

  const [formData, setFormData] = useState('')
  const [country, setCountry] = useState('')
  

  const changeCountryHandler = option => {
    setCountry(option)
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (

    <form onSubmit={handleSubmit((data) => {
      setFormData(data)
      setCountry(country)
    })}>

      <h3>Mock up of form with set-country-list package</h3>

      <div className="field-wrapper">
        <label>first name:</label>
        <input {...register("firstName", { required: true })} placeholder=" required"/>
      </div>
      {errors.firstName && <span>This field is required</span>}

      <div className="field-wrapper">
        <label>second name:</label>
        <input {...register("secondName", { required: true })} placeholder=" required"/>
      </div>
      {errors.secondName && <span>This field is required</span>}

      <div className="field-wrapper">
        <label>address line 1</label>
        <input {...register("addressLine1", { required: true })} placeholder=" required"/>
      </div>
      {errors.addressLine1 && <span>This field is required</span>}

      <div className="field-wrapper">
        <label>address line 2</label>
        <input {...register("addressLine2", { required: true })} placeholder=" required"/>
      </div>
      {errors.addressLine2 && <span>This field is required</span>}

      <div className="field-wrapper">
        <label>address line 3</label>
        <input {...register("addressLine3")} placeholder=" optional"/>
      </div>

      <div className="field-wrapper">
        <label>postcode:</label>
        <input {...register("postcode", { required: true })} placeholder=" required"/>
      </div>
      {errors.postcode && <span>This field is required</span>}

      <div className="field-wrapper">
        <label>country:</label>
        <Select options={countryOptions} value={country} onChange={changeCountryHandler}/>
      </div>

      <input className="submit-button" type="submit" value="submit"/>

      <h3>Exported Data</h3>
      <div>{formData.firstName}</div>
      <div>{formData.secondName}</div>
      <div>{formData.addressLine1}</div>
      <div>{formData.addressLine2}</div>
      <div>{formData.addressLine3}</div>
      <div>{formData.postcode}</div>
      <div>{country.label}</div>

    </form>
  );
}

