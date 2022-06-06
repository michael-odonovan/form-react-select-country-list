import './App.css';
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

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

      {errors.exampleRequired && <span>This field is required</span>}

      <input class="submit-button" type="submit"/>

    </form>

  );
}

