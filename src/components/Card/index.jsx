import React, { useEffect } from "react"
import './style.scss';
import columns from './defaultColumns';

const EditCard = props => {
  const { dataSource, event } = props;

  return (
    <div className="card-box" {...event}>
      {columns.map(item => {
        if(dataSource[item.dataIndex]){
          return <div>{item.title}: {dataSource[item.dataIndex]}</div>
        }
      })}
    </div>
  )
}

export default EditCard;
