import Link from "next/link";


export const metadata = {
    title: "Folder 1",
    description: "This is home page",
  };
  
  export default function Folder1() {
   
    return (
     <div className="flex flex-col gap-10 p-20">
         <h1>Folder 1</h1>
         <Link href='/folder1/folder2' className="text-blue-500">Folder 2</Link>
     </div>
    );
  }
  