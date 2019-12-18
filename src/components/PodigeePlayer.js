import React from "react"
class StaticPodigeePlayer extends React.Component {
  constructor(props) {
    super(props)
    this.theme = props.theme
    this.playerSource =
      "https://cdn.podigee.com/podcast-player/javascripts/podigee-podcast-player.js"
  }
  jsonConfig() {
    return JSON.stringify({
      episode: {
        // coverUrl:
        //   "https://images.podigee.com/90x,sabagK4V_yGDanwc5brVBURwuLdbKAb5BQ1rx5zQcd9o=/https://cdn.podigee.com/uploads/u1/72b01048-d910-4809-8e97-3b25bb4561b1.png",
        media: {
          mp3:
            // "https://cdn.podigee.com/media/podcast_4411_podigee_podcast_news_episode_11_zahlenzauber_bei_podigee.mp3?v=1565954088&source=web_download&dl=1",
            // "https://cdn.podigee.com/media/podcast_15431_the_testers_episode_1_new_episode.mp3?v=1571041732&source=user_backend",
            `${this.props.source}`,
        },
      },
      options: {
        // theme: `${this.props.theme}`,
        theme: {
          html: "https://the-americans.com/podigee/index.html",
          css: `https://the-americans.com/podigee/index.css`,
        },
      },
    })
  }

  loadPodigeePlayerScript() {
    // load podigee player scripts when the component was mounted
    const script = document.createElement("script")
    script.src = this.playerSource
    script.async = true
    document.body.appendChild(script)
  }

  componentDidMount() {
    this.loadPodigeePlayerScript()
  }

  render() {
    const configuration = this.props.configuration || this.jsonConfig()

    return (
      <div>
        <div
          className="podigee-podcast-player"
          data-configuration={configuration}
          src={this.playerSource}
        ></div>
      </div>
    )
  }
}

export default StaticPodigeePlayer
