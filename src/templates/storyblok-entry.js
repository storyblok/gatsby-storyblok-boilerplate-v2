import React from 'react'

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    let story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)
    this.state = {story: story}
  }

  render() {
    let content = this.state.story.content

    return (
      <div>
        {content.component}
      </div>
    )
  }
}

export default StoryblokEntry
