import { addUser } from "@/actions/user";
import Button from "./Button";

const Form = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form action={addUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Button/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
