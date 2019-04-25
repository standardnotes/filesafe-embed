export default class MessagesManager {

  constructor({credentialManager, integrationManager}) {
    this.credentialManager = credentialManager;
    this.integrationManager = integrationManager;
  }

  async getMessages() {
    var messages = [];

    /*
    Display messages if:
    No keys
    No integrations
    */

    var credentials = await this.credentialManager.getDefaultCredentials();
    if(!credentials) {
      messages.push({
        message: "No encryption keys loaded. Press Expand to generate new keys.",
        css: "warning"
      })
    }

    var integrations = this.integrationManager.integrations;

    if(!integrations || integrations.length == 0) {
      messages.push({
        message: "No cloud integrations configured. Press Expand to set up.",
        css: "warning"
      })
    }

    return messages;
  }
}
