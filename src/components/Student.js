import React from 'react'

export default function Student(props) {
    return (
        <li>
            <p>姓名：{props.name}</p>
            <p>地址：{props.address}</p>
        </li>
    )
}
