import { LitElement, html, css } from "lit";

class VideoListTitle extends LitElement {
  static properties = {
    header: { type: String },
    videoicon: { type: String },
    videotitle: { type: String },
  };

  static styles = css`
    .video-title {
      margin: 10px;
    }

    .list-of-video {
      margin-top: 10px;
      border-top: 1px solid red;
      border-bottom: 1px solid red;
    }
  `;

  constructor() {
    super();
    this.header = "My app";
    this.videoicon = "none";
    this.videotitle = "Welcome";
  }

  render() {
    return html`
      <div class="list-of-video">
        <div class="video-icon">${this.videoicon}<div>
        <div class="video-title">${this.videotitle}</div>
      </div>
    `;
  }
}
customElements.define("video-list-title", VideoListTitle);
