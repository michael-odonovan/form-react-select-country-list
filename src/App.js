import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <label>first name:</label>
      <input {...register("firstName", { required: true})}/>

      <label>second name:</label>
      <input {...register("secondName", { required: true})}/>

      <label>postcode:</label>
      <input {...register("postcode", { required: true})}/>

      <input {...register("exampleRequired", { required: true })}/>

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit"/>

    </form>
  );
}

export default App;
