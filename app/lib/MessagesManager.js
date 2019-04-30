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
        message: "Create keys by selecting <strong>Create New</strong> under <i>Keys</i>.",
        css: "sk-base"
      })
    }

    var integrations = this.integrationManager.integrations;

    if(!integrations || integrations.length == 0) {
      messages.push({
        message: "Add a new integration by selecting <strong>Add New</strong> under <i>Integrations</i>",
        css: "sk-base"
      })
    }

    return messages;
  }
}
