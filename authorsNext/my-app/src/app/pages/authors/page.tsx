

"use client";
import "./../authors/authors.scss"
import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./../../farebase/config";

type Props = {};
interface Fire {
  id: string;
  name: string;
  img: string;
  isDead:boolean;
  isMale:boolean;
  years:string;
  genre:boolean;
  birthyear:number

}

const Users = (props: Props) => {
  const [fireStroreData, setFireStroreData] = useState<Fire[]>([]);


  const getDataFirestore = async () => {
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "authors"));
    console.log("querySnapshot", querySnapshot);

    let arr: Fire[] = [];
    querySnapshot.forEach((doc) => {
     
      let obj: Fire = {
        id: doc.id,
        name: doc.data().name,
        img: doc.data().img,
        years: doc.data().years,
        genre:doc.data().genre,
        isMale:doc.data().isMale
      };
      arr.push(obj);
    });
    console.log("arr", arr);
    setFireStroreData(arr);
  };




 

  useEffect(() => {
    getDataFirestore();
  }, []);

  

  return (
    <>
      <div className="authorsMain">
        <div className="navHome">
          <div className="title"><h1>AUTHORS</h1></div>
          <div className="list">
            <div className="listEl"> <Link className="link" href="/">Home</Link></div>
            <div className="listEl"><Link className="link" href="/pages/authors">AUTHORS</Link></div>
            <div className="listEL"><Link className="link" href="/pages/addauthors"> ADD AUTHORS</Link></div>



          </div>
        </div>

        <div className="section1">
          <div className="search">
            <input type="text" placeholder="Search Author" />
          </div>
          <div className="gender">
            <select name="" id="">
              <option value="">Gender</option>
              <option value="">Female</option>
              <option value="">Male</option>
            </select>



          </div>


        </div>
        <div className="cards">

          {fireStroreData &&
            fireStroreData.map((elem, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                    <Link href="#">
                      <img className="rounded-t-lg" src={elem.img} alt={elem.name} width={400} height={100} />
                    </Link>
                    <div className="p-5">
                      <Link href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elem.name}</h5>
                      </Link  >
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Years:{elem.years}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Genre:{elem.genre}</p>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"  onClick={()=>{
                        const deleteUserData = async ()=>{
                          const db =getFirestore(app);
                          await deleteDoc(doc(db, "authors", elem.id))
                          setFireStroreData(
                            fireStroreData.filter((x)=>x.id !=elem.id)
                          )
                        };
                        deleteUserData();
                        
                      }}>
                        DELETE
                      </button>
                      
                    </div>
                  </div>
                </React.Fragment>
              
                  )
  })}



                  {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <Image className="rounded-t-lg" src="data:image/jpeg;base64,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" alt="" width={400} height={100}/>
    </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link  >
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
  DELETE
</button>
    </div>  
</div> */}
                  {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <Image className="rounded-t-lg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEA8QEBUQDw8PDxAPDw8PDxAPFRUWFhUWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFSsdHR0rKystKy0tKy0rLS0rKysrKy0rLSsrKysrLS0rLTctKy0tLS0tLTc3KzctNy0rLSsrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQQFAgMGB//EADsQAAICAAMGAwYFAgUFAQAAAAABAhEDBCEFEjFBUWEGcZETIoGhsfAyQsHR8VLhM2JygpIUFiNDwgf/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHBEBAQEBAAMBAQAAAAAAAAAAAAERAhIhQTED/9oADAMBAAIRAxEAPwDyChpDAyCgoBgIBgAhgAAAAgAB0FAKhoYAIBjUb4L0Ax3TZhZeUmklx4EvCwK5a97/AIOnyWybSitWtJN6JP8Ayt8fN/xqcsXvHL4ezJSdcKpuTa3ad8OvB+hPwvDeJK6flUXbVnc5PYK+juq06pcmv3J0nDDfsUqxJS99rVRS0td2lp59S+Mc73fjz3/tiX9WvFqq+fP0Iec2Diw13d5f5eXmj2DL7Gju+6lrSjpdLRX/AMVH4s14+zEotSq3wilcml27v6l8YedeITw2uKa8019TXR7Bh+GVNP2m9bXCUqivhpf9uRy+2vCOHC6xGnx4JR9f7Gbw1P6T64cGSc5lXhy3ZfB1xI5l1IB0IBAMAMQGMDEDIQGLAbEAgGJgYtCZkKgNoAAAMAAAAYCoYAABQDSAAGACAYIBxSLPZ+z3J07V8913RoyWBF6t8OFui4W0IxSiuWiVtLh8xGa2YGyJd3ryT0fxR1WxdnSS0ttJL+Vz+ZRbPzybXH4VXozrtm7RgtJOuktfp0NysWM8Zzw5Rk4p4b9yWjW43pTXR/26FftbdWabu47sZby193iXeZz0ZKUJvjFuLvjz+teiOezaVptq1FRfJ6N0LVxaLb2LNuGGtyN0pVrXZ8vvsT8hTem/J851a8l1OZwcVvRPRcaSa76lxk80l+G+KVtrsVnHUYOCly1q1vNfQrdq5Rz4c/RdTbg55VSbf+6kRsfMyu0r7Rtp+pdS8uX8ReG44ie5HWKck6pN3r5Hm2eyjw5OElTTqj2rEzPtLitKTtNa3+pxvjTZjkvaYdTcb34uK3qXTS33JZsOevG48+oDITObuxABgIAAAAAATEMQCAAIFQqMhAZgAFDAAABoAAAAYAMQAAx0CAVDiwGgNjxGo3fkR4Y82/dbXPilfqb5wuKv4/fr6GuEeSr9EES8ntGcHT3l8viX0dpXG7rT3Xdp9m/tnK4MHfF+pM1SevyJrWOly21Hot7het/EmZ7aKSq0nu68dOpw8c246rtVvnzNWLtGUn70m/vmVnHVR2nb0ei7tWzpdlZtzSV7umlOKdHlsM9rq32otchtxx0106y5l1Ly9awcOdJ1GS5XKk+xk5taWl2TSafl09Tg8ltST1STt6u//rWy5yG1FdVr0emlctC+SYt5JwviuLlTrjyNWZyy3G4pcrjwjLz79xYuPautFTrm309eZpWZTX4tEmkt1Vrx/Q1HPuPNNrYW7izjrpJ1d3XxITLvxPFe1tO7WunPTgylMX9defwhgMjTEBsQCABgJmNGTABCGIBAMCBjQAUADEADEMBggGACGMAABgBlFdTEAM5O19F08/vkGCuvPUwhJN9dOHU24kqV89fXn9+ZUZYTuT7Pl2LPDy18uJWZdVJV15c21qXeTzCrdk0uepz6bii2pkqehV4mC0drj4W+n+B+UnfzRVZnI9Y/QTpcc0otM34ce1FjPJ1yXoa55R9DWpi48P48b3ZtU+Cpr5l7mso41iYU01wq1Jxd8nzj6UcZl1uvX1T1R0Ozc61+a09Ja6X19PoJWepjostvSVNN3xSdrXrr8jSt6O9GSk+arVShy+V/zxk5LMV764R1b4NRZJ9pTaq9bVLq7OnLh/Rwe3IScrcGkufXV+nqVB2/iJN4c3uae7J3JtKn8tOhxMn2onU9t/zuxixgBl0JhRkIDFgxtCoBANiABUMGBiwHQqAyAYIBAZUIAGIaABgMBIYAgGAAgAGhgBjuV+5jiTv6dkLHm1z4rsam758vv9BpiTCdu11Lid7qmpNcE1HT+PiUuBo1fU6jI4mFuVrK70f71p5mK0zymJopS9rJfmqUXJLrSvQt81k4OEZKWI1fFJNpPqqsq5ZmMHUoyWnN6U+pJyW1txPC3t6LacVLWtV1JlantGzmSiqe/J23wj2Nctm3oouVq7m3Em7WzbqMlp/5OV9JWasHaLtc607hrFXm9ltK0o/7Vovi/wBjZs3Z83o4tp6fpoXeLi+65yqC/rnSX7kCPiPBh/hveknruzdN9tLZrGLXRYOyZQy07XvSg4rrWj9dCiyu0ZLdjN6uDeq3uFJ/XlXP4X/h7brzE/ZzTdJ+vQqNsZNQxXBRu/auPC6csOS/VF5uMdc6heIM5JYOjVSmkufKT0/4o5EvvEUqjhw6bzfHlVfVlEJd/S8zm5CGIEUFiGwSAVAMAExMbEAgAAEDGADAKAAAYAFAAwAYJAAAAwAAABjEMCPm1oRsu6tu+XprZYTjaohrRrtaI1Pcb8bWq51Tv9QgsSDTTrhxla+NcTLLYWukmtdI0uPDR/fA3YuVp3OLv8ykmpIAntjML/2w66rD+hjg7TxN65ezm+D96Kb6VVDk8NcI2+Wl0RpZe9d2lzdaL+5Ux02z9oQxIbk6i73o20uqrU056daYUlapycfe3enDmW3/AOZpOUoSXGTkrStIkeJck8PNvHdrDxFCLkl7sZR3l73Zp/daz01lxx044mK/feJiU+DjiSjffVfbOgy3heePBNYMYNuTqnhSUeSptv1I+by+NGblhS3r1vDmpKvgXmxc1jx/HiRw+Tblh+0a6VJ36RLb6xnPrLDxHkp4cZ676nJyUN2dQVydp1dO+GvY27Jx/b408XGqlWHlYuE4OSuTjLdkk3pVvho6Nme3J4kMWU79najFJwjrXk792uC4mWJtHBwrx5SW9VRTpza4r6s5W/HTmfXHeKZP28oN7zw0otrnJ+8386+BTkjPZmWLiSxZcZycn2vkRzrJ6c7dpDBjTCEAxBCBgwCgxaMzFgIQ2IAAAAyAAABiABggABjEMAEgGAAA0gAENIAGaMbAt2jeFEJWhOvgTsLO4jVbzfZu0vUgYvFjwJ0+JG4sEpvg0vKMU/oacxhyTTnKUultuvImwxo1oyJnMy406t60mhrXjHb+Acmt6OJT10dcr6nX7cy0aqUN+Mvxc6R5JsDxLLBfOunM6afizNTp5fAc3WsmnuxXlzZMaTcTYmGlcW66XoVeNk4xlpaXXkdVh7PniYcZTioSnFSxILRKTWqRUbaccFXPBe6qTnFuUYvvrcfPgZX0q54O9Tuufain8SxW9BrnGS9Jf3JGYzD34vDb3ZK0tf1I3iB/4S6Rn82i8uXV1ThYBR0cwABYCAYgoENiABDMWAMQxMAAAAyCgAAGIYAAhgAwQAOhDAAAAAY0JDQDQxAQacdcyPPTUmyjehFxFxQajdlczucEm3xb1N+PL2i14lbiQb4adTKGI11/UjWpeBkldt/U9F8KZ2Cgo2lXwPOMrmeqn8ItljkI4z0wsPF4r3p1CC8xVj1HaO0YqNKVcdbr0ZxTz/tMR4ccb2ilcJweqrg/hxDLbPc5JY+NvvjLDg/cjHu+ZIzeVw8KcXhRjG2vw6J97M2mIuFg+5FvlFdij2vj7065QSj8eZ1eDlHiyWFB1dq6tJLW6++JDzfgXMRtwccVavRpTfrp8xzYx05MC8z/AIbxYqM8OMsRShFySpzhJrVNc13RTY2DKDqcZQfSScX8zesMGKxsRVMQ2zEBiAAGYsZiAAAAAhiAysBAAwBhQAMVjABiADIBIAGAIdAA0YORhLFZBvMMTGS5oizm3xZoA3QzUnx3fnYKdsiz0NmCw1EiHEc4GKJGDiLgyNNWC5/lbXk6LnZ+SxptXiPXSvaxt6cKuyvc4xdrT4Wn+x0ezNrYG6nJQjJV+WKd8mpVoKsSMnlJRe64uCXG1q+dp813N20cxFJRuuDT0tfaHmdswcd5yWj0V69yjwZvGxd+Sbja3Y9ehiw3463wzH3t98418LX8nV5/M+zhSesk0uy5s5fZeYjhrek1pLrxda/MyzGfliyvguCXRGM9sdVsWI26XPRE+eWhJVKKku6Ul8yJkcP8z+H7k+yuStxvD2WlxwIL/St36ELE8I5Z8Izj/pnL9bL1yDfLprk8z4Kh+TGmu0oqS+VFdi+Dsdfhlhy83KL9KZ3jkG8Xyq68wz+w8fBVzw3XOUPfivOuBWnsEknxKLa3hvBxbko+zlx3oJK33XM1OjXnoiXtLZ88Ge5PzjJcJLsRDbRAwAAAAAAEMBhYgABoEAACAAHZIwcu3q9PqPKYN1J9aXmT90zaI3s9KRplEnSiaJwIIcoGqcCXKJrlEuiFKJqnEmyiapYZRDMTfOBplEKyWIbMPET/ALkejFlxdSm+31MoyZE3n1Zsw5vqTF1cYGHFR3pOu7/RErKZx37sd3Sk+Ml5dGV+Wy7dOTb6aqkdHsnZqlrdR5tcfv4GL6ZvSRkYN1afRLV+h0eSyday+EePr+xHym5DSC7OT1b+JPWIYrFqRvGLmR/aApERtcg3jW2YuYG1zMHieXqaZTNO+USf+rNyxUU2JiapdzKWYafk19QNm39nxxYbvVNxf9Mlz+Z5ziwcW4yVOLaa7o9KxcXVLu/ocb4iynDGX5qjNd6tP0T9DpzSKQYhm2wKwAD/2Q==" alt="" width={400} height={100}/>
    </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link  >
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
  DELETE
</button>
    </div>  
</div> */}
                  {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <Image className="rounded-t-lg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEA8QEBUQDw8PDxAPDw8PDxAPFRUWFhUWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFSsdHR0rKystKy0tKy0rLS0rKysrKy0rLSsrKysrLS0rLTctKy0tLS0tLTc3KzctNy0rLSsrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQQFAgMGB//EADsQAAICAAMGAwYFAgUFAQAAAAABAhEDBCEFEjFBUWEGcZETIoGhsfAyQsHR8VLhM2JygpIUFiNDwgf/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHBEBAQEBAAMBAQAAAAAAAAAAAAERAhIhQTED/9oADAMBAAIRAxEAPwDyChpDAyCgoBgIBgAhgAAAAgAB0FAKhoYAIBjUb4L0Ax3TZhZeUmklx4EvCwK5a97/AIOnyWybSitWtJN6JP8Ayt8fN/xqcsXvHL4ezJSdcKpuTa3ad8OvB+hPwvDeJK6flUXbVnc5PYK+juq06pcmv3J0nDDfsUqxJS99rVRS0td2lp59S+Mc73fjz3/tiX9WvFqq+fP0Iec2Diw13d5f5eXmj2DL7Gju+6lrSjpdLRX/AMVH4s14+zEotSq3wilcml27v6l8YedeITw2uKa8019TXR7Bh+GVNP2m9bXCUqivhpf9uRy+2vCOHC6xGnx4JR9f7Gbw1P6T64cGSc5lXhy3ZfB1xI5l1IB0IBAMAMQGMDEDIQGLAbEAgGJgYtCZkKgNoAAAMAAAAYCoYAABQDSAAGACAYIBxSLPZ+z3J07V8913RoyWBF6t8OFui4W0IxSiuWiVtLh8xGa2YGyJd3ryT0fxR1WxdnSS0ttJL+Vz+ZRbPzybXH4VXozrtm7RgtJOuktfp0NysWM8Zzw5Rk4p4b9yWjW43pTXR/26FftbdWabu47sZby193iXeZz0ZKUJvjFuLvjz+teiOezaVptq1FRfJ6N0LVxaLb2LNuGGtyN0pVrXZ8vvsT8hTem/J851a8l1OZwcVvRPRcaSa76lxk80l+G+KVtrsVnHUYOCly1q1vNfQrdq5Rz4c/RdTbg55VSbf+6kRsfMyu0r7Rtp+pdS8uX8ReG44ie5HWKck6pN3r5Hm2eyjw5OElTTqj2rEzPtLitKTtNa3+pxvjTZjkvaYdTcb34uK3qXTS33JZsOevG48+oDITObuxABgIAAAAAATEMQCAAIFQqMhAZgAFDAAABoAAAAYAMQAAx0CAVDiwGgNjxGo3fkR4Y82/dbXPilfqb5wuKv4/fr6GuEeSr9EES8ntGcHT3l8viX0dpXG7rT3Xdp9m/tnK4MHfF+pM1SevyJrWOly21Hot7het/EmZ7aKSq0nu68dOpw8c246rtVvnzNWLtGUn70m/vmVnHVR2nb0ei7tWzpdlZtzSV7umlOKdHlsM9rq32otchtxx0106y5l1Ly9awcOdJ1GS5XKk+xk5taWl2TSafl09Tg8ltST1STt6u//rWy5yG1FdVr0emlctC+SYt5JwviuLlTrjyNWZyy3G4pcrjwjLz79xYuPautFTrm309eZpWZTX4tEmkt1Vrx/Q1HPuPNNrYW7izjrpJ1d3XxITLvxPFe1tO7WunPTgylMX9defwhgMjTEBsQCABgJmNGTABCGIBAMCBjQAUADEADEMBggGACGMAABgBlFdTEAM5O19F08/vkGCuvPUwhJN9dOHU24kqV89fXn9+ZUZYTuT7Pl2LPDy18uJWZdVJV15c21qXeTzCrdk0uepz6bii2pkqehV4mC0drj4W+n+B+UnfzRVZnI9Y/QTpcc0otM34ce1FjPJ1yXoa55R9DWpi48P48b3ZtU+Cpr5l7mso41iYU01wq1Jxd8nzj6UcZl1uvX1T1R0Ozc61+a09Ja6X19PoJWepjostvSVNN3xSdrXrr8jSt6O9GSk+arVShy+V/zxk5LMV764R1b4NRZJ9pTaq9bVLq7OnLh/Rwe3IScrcGkufXV+nqVB2/iJN4c3uae7J3JtKn8tOhxMn2onU9t/zuxixgBl0JhRkIDFgxtCoBANiABUMGBiwHQqAyAYIBAZUIAGIaABgMBIYAgGAAgAGhgBjuV+5jiTv6dkLHm1z4rsam758vv9BpiTCdu11Lid7qmpNcE1HT+PiUuBo1fU6jI4mFuVrK70f71p5mK0zymJopS9rJfmqUXJLrSvQt81k4OEZKWI1fFJNpPqqsq5ZmMHUoyWnN6U+pJyW1txPC3t6LacVLWtV1JlantGzmSiqe/J23wj2Nctm3oouVq7m3Em7WzbqMlp/5OV9JWasHaLtc607hrFXm9ltK0o/7Vovi/wBjZs3Z83o4tp6fpoXeLi+65yqC/rnSX7kCPiPBh/hveknruzdN9tLZrGLXRYOyZQy07XvSg4rrWj9dCiyu0ZLdjN6uDeq3uFJ/XlXP4X/h7brzE/ZzTdJ+vQqNsZNQxXBRu/auPC6csOS/VF5uMdc6heIM5JYOjVSmkufKT0/4o5EvvEUqjhw6bzfHlVfVlEJd/S8zm5CGIEUFiGwSAVAMAExMbEAgAAEDGADAKAAAYAFAAwAYJAAAAwAAABjEMCPm1oRsu6tu+XprZYTjaohrRrtaI1Pcb8bWq51Tv9QgsSDTTrhxla+NcTLLYWukmtdI0uPDR/fA3YuVp3OLv8ykmpIAntjML/2w66rD+hjg7TxN65ezm+D96Kb6VVDk8NcI2+Wl0RpZe9d2lzdaL+5Ux02z9oQxIbk6i73o20uqrU056daYUlapycfe3enDmW3/AOZpOUoSXGTkrStIkeJck8PNvHdrDxFCLkl7sZR3l73Zp/daz01lxx044mK/feJiU+DjiSjffVfbOgy3heePBNYMYNuTqnhSUeSptv1I+by+NGblhS3r1vDmpKvgXmxc1jx/HiRw+Tblh+0a6VJ36RLb6xnPrLDxHkp4cZ676nJyUN2dQVydp1dO+GvY27Jx/b408XGqlWHlYuE4OSuTjLdkk3pVvho6Nme3J4kMWU79najFJwjrXk792uC4mWJtHBwrx5SW9VRTpza4r6s5W/HTmfXHeKZP28oN7zw0otrnJ+8386+BTkjPZmWLiSxZcZycn2vkRzrJ6c7dpDBjTCEAxBCBgwCgxaMzFgIQ2IAAAAyAAABiABggABjEMAEgGAAA0gAENIAGaMbAt2jeFEJWhOvgTsLO4jVbzfZu0vUgYvFjwJ0+JG4sEpvg0vKMU/oacxhyTTnKUultuvImwxo1oyJnMy406t60mhrXjHb+Acmt6OJT10dcr6nX7cy0aqUN+Mvxc6R5JsDxLLBfOunM6afizNTp5fAc3WsmnuxXlzZMaTcTYmGlcW66XoVeNk4xlpaXXkdVh7PniYcZTioSnFSxILRKTWqRUbaccFXPBe6qTnFuUYvvrcfPgZX0q54O9Tuufain8SxW9BrnGS9Jf3JGYzD34vDb3ZK0tf1I3iB/4S6Rn82i8uXV1ThYBR0cwABYCAYgoENiABDMWAMQxMAAAAyCgAAGIYAAhgAwQAOhDAAAAAY0JDQDQxAQacdcyPPTUmyjehFxFxQajdlczucEm3xb1N+PL2i14lbiQb4adTKGI11/UjWpeBkldt/U9F8KZ2Cgo2lXwPOMrmeqn8ItljkI4z0wsPF4r3p1CC8xVj1HaO0YqNKVcdbr0ZxTz/tMR4ccb2ilcJweqrg/hxDLbPc5JY+NvvjLDg/cjHu+ZIzeVw8KcXhRjG2vw6J97M2mIuFg+5FvlFdij2vj7065QSj8eZ1eDlHiyWFB1dq6tJLW6++JDzfgXMRtwccVavRpTfrp8xzYx05MC8z/AIbxYqM8OMsRShFySpzhJrVNc13RTY2DKDqcZQfSScX8zesMGKxsRVMQ2zEBiAAGYsZiAAAAAhiAysBAAwBhQAMVjABiADIBIAGAIdAA0YORhLFZBvMMTGS5oizm3xZoA3QzUnx3fnYKdsiz0NmCw1EiHEc4GKJGDiLgyNNWC5/lbXk6LnZ+SxptXiPXSvaxt6cKuyvc4xdrT4Wn+x0ezNrYG6nJQjJV+WKd8mpVoKsSMnlJRe64uCXG1q+dp813N20cxFJRuuDT0tfaHmdswcd5yWj0V69yjwZvGxd+Sbja3Y9ehiw3463wzH3t98418LX8nV5/M+zhSesk0uy5s5fZeYjhrek1pLrxda/MyzGfliyvguCXRGM9sdVsWI26XPRE+eWhJVKKku6Ul8yJkcP8z+H7k+yuStxvD2WlxwIL/St36ELE8I5Z8Izj/pnL9bL1yDfLprk8z4Kh+TGmu0oqS+VFdi+Dsdfhlhy83KL9KZ3jkG8Xyq68wz+w8fBVzw3XOUPfivOuBWnsEknxKLa3hvBxbko+zlx3oJK33XM1OjXnoiXtLZ88Ge5PzjJcJLsRDbRAwAAAAAAEMBhYgABoEAACAAHZIwcu3q9PqPKYN1J9aXmT90zaI3s9KRplEnSiaJwIIcoGqcCXKJrlEuiFKJqnEmyiapYZRDMTfOBplEKyWIbMPET/ALkejFlxdSm+31MoyZE3n1Zsw5vqTF1cYGHFR3pOu7/RErKZx37sd3Sk+Ml5dGV+Wy7dOTb6aqkdHsnZqlrdR5tcfv4GL6ZvSRkYN1afRLV+h0eSyday+EePr+xHym5DSC7OT1b+JPWIYrFqRvGLmR/aApERtcg3jW2YuYG1zMHieXqaZTNO+USf+rNyxUU2JiapdzKWYafk19QNm39nxxYbvVNxf9Mlz+Z5ziwcW4yVOLaa7o9KxcXVLu/ocb4iynDGX5qjNd6tP0T9DpzSKQYhm2wKwAD/2Q==" alt="" width={400} height={100}/>
    </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link  >
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
  DELETE
</button>
    </div>  
</div> */}

                </div>
       </div>
      </>
      );
};

      export default Users;