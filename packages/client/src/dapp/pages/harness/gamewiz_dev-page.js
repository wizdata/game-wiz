
import '../../../lib/components/shared/action-card.js';
import '../components/page-body.js';
import "../components/page-panel.js";
import '../../../lib/components/widgets/text-widget.js';
import '../../../lib/components/widgets/number-widget.js';
import '../../../lib/components/widgets/account-widget.js';
import DOM from "../../../lib/components/shared/dom";
import DappLib from "@decentology/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("gamewiz-dev-page")
export default class GameWizDevPage extends LitElement {
    @property()
    title;
    @property()
    category;
    @property()
    description;
  
    createRenderRoot() {
      return this;
    }
  
    constructor(args) {
      super(args);
    }
  
    render() {
      /*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: GameWiz DEV  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
      return html`
        <page-body
          title="${this.title}"
          category="${this.category}"
          description="${this.description}"
        >
          <action-card
            title="Balance Initialization"
            description="Initialize Balance"
            action="payFee"
            method="post"
          >
          </action-card>

          <action-card
            title="Balance"
            description="Get Balance"
            action="getBalance"
            method="get"
          >
          </action-card>

          <action-card
            title="Fee Payment"
            description="Pay Fee"
            action="payFee"
            method="post"
          >
          </action-card>
          
        </page-body>
        <page-panel id="resultPanel"></page-panel>
      `;
    }
}

