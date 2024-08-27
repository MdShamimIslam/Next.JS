"use client";

import {useFormStatus} from "react-dom";

const Button = () => {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="btn btn-primary">
        {pending ? "Submititng" : "Submit"}
    </button>
  )
}

export default Button