import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue="test" {...register("example")}/>

      <input {...register("exampleRequired", { required: true })}/>

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit"/>

    </form>
  );
}

export default App;
