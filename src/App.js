import './App.css';
import { useForm } from 'react-hook-form'

export default function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  console.log(errors)

  return (

    <form onSubmit={handleSubmit((data) => {
      console.log(data)
    })}>

      <div class="field-wrapper">
        <label>first name:</label>
        <input {...register("firstName", { required: true})}/>
      </div>

      <div class="field-wrapper">
        <label>second name:</label>
        <input {...register("secondName", { required: true})}/>
      </div>

      <div class="field-wrapper">
        <label>postcode:</label>
        <input {...register("postcode", { required: true})}/>
      </div>

      <div class="field-wrapper">
        <label>country:</label>
        <select {...register("country", { required: true})}>
          <option value="england">England</option>
          <option value="australia">Australia</option>
          <option value="jamaica">Jamaica</option>
        </select>
      </div>

      <input className="submit-button" type="submit"/>

    </form>

  );
}

