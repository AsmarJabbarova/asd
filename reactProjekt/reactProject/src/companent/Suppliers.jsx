import React, { useEffect,  useState } from 'react';
import { Table,Button,Modal } from 'antd';
import axios from 'axios';
import { memo } from 'react';
function Suppliers() {
    let [suppliers, setSuppliers] = useState([])
    useEffect(() => {axios("https://northwind.vercel.app/api/suppliers").then((res) => {
        setSuppliers(res.data)

    })}, [suppliers])
    const columns = [
        // {
        //     title: 'id',
        //     dataIndex: 'id',
        //     sorter: (a, b) => a.id - b.id,
        // },
        {
            title: 'Company name',
            dataIndex: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName),
        },
        {
            title: 'Contact title',
            dataIndex: 'contactTitle',
            filters: suppliers.map((sup) => {
            return {
                text: sup.contactTitle,
                value: sup.contactTitle,
            }
        })
  
            
          ,
    onFilter: (value, record) => record.contactTitle.indexOf(value) === 0,
        filterSearch: true,
            width: '40%',
        },
        {
            title: "Delete",
            render: (text, record) => (
              <Button
                type="primary"
                danger
                onClick={() => {
                  axios.delete(`https://northwind.vercel.app/api/suppliers/${record.id}`, 
                  );
                  setSuppliers((suppliers) =>
                    suppliers.filter((x) => x.id !== record.id)
                  );
                }}
              >
                {"Delete"}
              </Button>
            ),

          },
          {
            title: "Edit",
            render: (text, record) => {
              return(
               <>
                <Button
                type="primary"
                
                onClick={() => {
                  showModal()
                }}
              >
                {"Edit"}
              </Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input>{suppliers.username}</input>
      <input></input>
        <p>Some contents...</p>
      </Modal>

               </>
              )
              
            },

          },
      ];




;
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

return (
    <Table columns={columns} dataSource={suppliers} onChange={onChange} 
    rowKey={(record)=> record.id}
    />
)
    }
export default Suppliers;