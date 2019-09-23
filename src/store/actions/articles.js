import { articleAPI, commentsAPI } from '../../utils'
import { ARTICLES_TYPES } from '../types'

export const fetchArticle =  () => dispatch => {  
  articleAPI.get().then( article =>     
    dispatch({
      type: ARTICLES_TYPES.FETCH_ARTICLE_FULFILLED,
      payload: { article }
    }))  
}

export const fetchComments =  () => dispatch => {  
  commentsAPI.get().then( comments =>
    dispatch({
      type: ARTICLES_TYPES.FETCH_COMMENTS_FULFILLED,
      payload: { comments }
    }))
}

export const addLikeToReply = id => ({
  type: ARTICLES_TYPES.ADD_LIKE_TO_REPLY,
  payload: { id }
})