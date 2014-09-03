Ext.define('map_test.view.Map', {
	extend: 'Ext.Container',
	requires: ['Ext.Map'],
	xtype: 'maptestview',

	config: {
		layout: 'fit',
		items: [
			{
				xtype: 'map'
			}
		]
	}
});
