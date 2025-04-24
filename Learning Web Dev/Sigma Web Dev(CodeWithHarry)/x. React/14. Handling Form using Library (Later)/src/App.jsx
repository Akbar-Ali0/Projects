import './App.css'
import { useForm } from "react-hook-form";

function App() {

  // const [isSubmitting, setIsSubmitting] = useState(second)

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)  //simulating network delay

    let r = await fetch("http://localhost:3000/", {
      method: "POST",

      headers: { "Content-Type": "application/json", },

      body: JSON.stringify(data)
    })
    // let res = await r.json()
    let res = await r.text()
    // console.log(data, res)
    // console.log(data);
    if (data.username !== "Akbar") {
      setError("myFormm", { message: "Credentials are invalid!" })
    }
    if (data.username === "asdff") {
      setError("blocked", { message: "This user is blocked!" })
    }
  }



  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("username", { required: { value: true, message: "This field is required!" }, minLength: { value: 5, message: "Minimum length is 5" }, maxLength: { value: 10, message: "Max length is 10" } })} placeholder='username' />
          {errors.username && <div style={{ color: "red", fontSize: "12px" }}>{errors.username.message}</div>}
          {/* {errors.username && <div style={{ color: "red" }}>Error in Username Field</div>} */}
          <br />
          <input type="password" placeholder='password'
            {...register("password", { required: { value: true, message: "Password is required!" }, minLength: { value: 5, message: "Length is less than 5" } })}
          />
          {errors.password && <div style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</div>}
          <br />
          <input type="submit" value='Submit' disabled={isSubmitting} />
          {errors.myFormm && <div style={{ color: "red", fontSize: "12px" }}>{errors.myFormm.message}</div>}
          {errors.blocked && <div style={{ color: "red", fontSize: "12px" }}>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
