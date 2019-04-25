import Filesafe from "filesafe-js";

export default class FilesafeManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new FilesafeManager(); }
    return this.instance;
  }

  setFilesafeInstance(filesafe) {
    this.filesafe = filesafe;
  }

  defaultRelayServerUrl() {
    return window.default_relay_server_url;
  }

}
