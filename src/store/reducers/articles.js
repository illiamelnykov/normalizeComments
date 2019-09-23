import { normalize } from 'normalizr';
import { ARTICLES_TYPES } from '../types'
import { commentSchema } from '../schemas'

const initState = {
  article: {},
  comments: {},
}

export function ArticlesReducer (state = initState, {payload, type}) {
  switch (type) {
    case ARTICLES_TYPES.FETCH_ARTICLE_FULFILLED: {
      return {
        ...state,
        article: payload.article,        
      }
    }
    case ARTICLES_TYPES.FETCH_COMMENTS_FULFILLED: {
      return {
        ...state,
        comments: normalize(payload.comments, commentSchema)
      }   
    }
    case ARTICLES_TYPES.ADD_LIKE_TO_REPLY: {
      const { id } = payload
      const { comments } = state      
      return {
        ...state,
        comments: { 
          ...comments,
          entities: {
            ...comments.entities,
            replies: {
              ...comments.entities.replies,
              [id]: { 
                ...comments.entities.replies[id],
                likes: comments.entities.replies[id].likes+=1,
              }
            }
          }
        }
      }  
    }   
    default:
      return {
        ...state
      }
  }
}