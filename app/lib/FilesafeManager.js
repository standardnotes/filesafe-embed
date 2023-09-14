export default class FilesafeManager {

  /*
    Singleton. `instance` is nulled in the unload function.
   */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new FilesafeManager(); }
    return this.instance;
  }

  constructor() {
    this.unloadHandlers = [];
    this.dataChangeObservers = [];
  }

  setFilesafeInstance(filesafe) {
    this.filesafe = filesafe;

    this.fsObserver = filesafe.addDataChangeObserver(() => {
      for(let observer of this.dataChangeObservers) {
        observer();
      }
    })
  }

  setDelegate(delegate) {
    this.delegate = delegate;
  }

  getDelegate() {
    return this.delegate || {};
  }

  addDataChangeObserver(observer) {
    this.dataChangeObservers.push(observer);
  }

  addUnloadHandler(handler) {
    this.unloadHandlers.push(handler);
  }

  unload() {
    for(let handler of this.unloadHandlers) {
      handler();
    }

    this.dataChangeObservers = [];

    if(this.filesafe) {
      this.filesafe.removeDataChangeObserver(this.fsObserver);
    }

    FilesafeManager.instance = null;
  }

  defaultRelayServerUrl() {
    return window.default_fs_relay_server_url || "https://filesafe.standardnotes.com";
  }

}
