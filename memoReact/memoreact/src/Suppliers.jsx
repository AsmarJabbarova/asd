import React, { useState } from 'react';
import { Table } from 'antd';
import axios from 'axios'
function Suppliers  (){ 
    let [suppliers, setSoppliers]=useState([])
    axios("https://northwind.vercel.app/api/suppliers").then((res)=>{
        setSoppliers(res.data)
    })
    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          sorter:(a, b)=>a.id - b.id,
         
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          
        },
        {
          title: 'Company name',
          dataIndex: 'companyName',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'City',
          dataIndex: ['companyName'],
        //   sorter;(a, b )=> a.age - b.age,
          filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
        },
      ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };


return(
<Table columns={columns} dataSource={suppliers} onChange={onChange} />

)

}
export default Suppliers;