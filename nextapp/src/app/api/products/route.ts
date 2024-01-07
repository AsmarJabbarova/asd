// const products=[
//     {
//         title:"rings",
//         id:1
//     },
//     {
//         title:"bags",
//         id:2
//     },
// ]
// import { NextResponse } from "next/server";
// export const Get= async (req:Request, res:Response)=>{
//     return NextResponse.json(
//         {
//             products,
//         },
//         {
//             status:200
//         }
//     );
// };

import {products} from '@/app/util/db';
import { NextResponse } from "next/server";

export function GET(){
    const data=products;
    return NextResponse.json({data})
}
