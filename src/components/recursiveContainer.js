import React from 'react';

const RecursiveContainer = ({arr, arrId, addLikeToReply}) => {  
  return (
    <div  className='comment-reply'>
      {
        arrId.map(r => (
          <div key={r}>
            <div dangerouslySetInnerHTML={{__html: arr[r].commentText }} />   
            <div className='comment-bottom'>
              <span>likes: {arr[r].likes}</span>
              <span 
                className='add-like'
                onClick={addLikeToReply(arr[r].id)}> + </span>
              <span>name: {arr[r].name}</span>
            </div>
            {
              arr[r].replies && 
              <RecursiveContainer
                arr={arr}
                arrId={arr[r].replies}
                addLikeToReply={addLikeToReply}/>
            }
          </div>
        ))
      }      
    </div>
  );
};

export default RecursiveContainer;