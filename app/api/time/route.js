
export const dynamic = "force-dynamic"; //default:-> dynamic = "auto"

export const GET = async()=>{
    return new Response(new Date().toLocaleTimeString());
}