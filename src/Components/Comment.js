// Form компоненти тузунуздор жана Comment компоненти тузунуздор 
// Form Компонента Comment ичинде чакырылат жана Form'го жазылган маанилер Comment компонентин ичинде пайда болуп калыш керек 
// Form'го бир маани жазылат:

// комментарий

// Жана сиздер коменти жазганынызда кайсыл убакыта коментарий калтырылгандыгын дагым чыгарышыныздар керек

// Создайте form компоненту и comment компоненту
// внутри Form компонента вызывается Comment компонента и в form компоненту будут вводиться данные и эти данные должны попасть в Form компоненту и соответственно отображаются внутри Form компоненты
//  в form будут вводиться данные:
// сам комментарий  

// и вы должны определить в какое время был добавить комментарий и вместе с комментом это отобразить 

import Form from './Form';
import React, { useState } from 'react';
import "./Comment.css";


function Comment(props){

    let DATA = []
    const [data, setData] = useState(DATA)
    function addToData(newData){
      setData([
        ...data,
        newData
      ])
    }
    return(
    <div>
        <Form add={addToData}/>
        <div>
        {
            data.map(item => {
                return <div>
                    <div>
                        <span className='Author'>{item.name}</span>
                      
                        <br/>
                        <p className="comment-time">{item.comment}</p>
                        <span className='Time'>{item.date}</span>
                    </div>
                    </div>
            })
        }
        </div>
    </div>
    )
}
export default Comment;