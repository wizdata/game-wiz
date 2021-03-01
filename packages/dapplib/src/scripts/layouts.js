const BufferLayout = require('buffer-layout');

module.exports = class DataLayouts {

    static get() {
        let dataLayouts = [];

 /*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: GameWiz DEV  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
  dataLayouts.push({
      name: 'gamewiz',
      layout: BufferLayout.struct([BufferLayout.u32('balance')])
    }
  );


        return dataLayouts;
    }
}