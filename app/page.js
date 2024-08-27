import Form from "@/components/Form";
import UserList from "@/components/UserList";


const HomePage = async() => {

  return (
    <div className="p-20 text-center">
      <h2 className="text-3xl"> Home Content</h2>
      <Form/>
     <div className="mt-6 ">
     <UserList/>
     </div>
    </div>
  )
}

export default HomePage