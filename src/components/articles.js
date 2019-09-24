import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ArticlesActions } from '../store/actions'
import RecursiveContainer from './recursiveContainer';

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric'}

const Article = ({
  actions,
  article,
  comments,
}) => {
  useEffect(() => {
    actions.fetchArticle()
    actions.fetchComments()    
  }, [])

  const addLikeToReply = useCallback(id => () =>     
    actions.addLikeToReply(id)
  )

  const { entities, result } = comments 
  if (!article.id) {
    return null
  }
  return (
    <section className='article-page'>
      <article>
        <h1>{ article.title }</h1>
        <div
        dangerouslySetInnerHTML={{__html: article.text }} />      
        <div className='article-date'>{ new Date(article.date).toLocaleDateString('en-US', dateOptions) }</div>
      </article>
      { result && result.length && 
        <RecursiveContainer
          arr={entities.replies}
          arrId={result}
          addLikeToReply={addLikeToReply}
        />
      }
    </section>
  )
}

Article.propTypes = {
  actions: PropTypes.shape({
    fetchArticle: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired,     
    addLikeToReply: PropTypes.func.isRequired,
  }).isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  article: state.articles.article,
  comments: state.articles.comments,
})

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({ ...ArticlesActions }, dispatch),
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article)