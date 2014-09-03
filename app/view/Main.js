Ext.define('map_test.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
		'map_test.view.Map'
    ],
    config: {
		layout: 'fit',
        items: [
            {
				xtype: 'map'

            },
        ]
    }
});
