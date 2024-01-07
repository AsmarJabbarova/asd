import Link from "next/link"

export default function Login() {
    return (
        <>
         <h1>Login</h1>
    <form>
<label htmlFor="">name</label><br />
<input type="text" /><br />
<label htmlFor="">password
</label><br />
<input type="password" /><br />

    </form>
    <Link href="products"><button>Login</button></Link>
        </>
   
    )
  }
  