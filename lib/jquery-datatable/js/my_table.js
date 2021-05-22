function MyTable(id_selector, dt_parameters, columns_settings) {
	var counter = 0;
	var hidden_ids = [];
	var included_ids = [];
	var selector = '#' + id_selector;

	$(columns_settings).each(function () {
		var named_id = $('thead th[data-colname="' + this.columnname + '"]', selector).index('th');

		if (this['is_hidden'] == "1") {
			hidden_ids.push(used_id);
		}
		if (this['cannot_be_toggled'] == "0") {
			included_ids.push(used_id);
		}
		counter++;
	});

	var exportColumns = ":visible:not(.noExport)";
	if (dt_parameters.hasOwnProperty("exportColumns")) {
		// A custom buttons configuration has been passed from the page
		exportColumns = dt_parameters["exportColumns"];
	}

	var export_buttons = [
		{
			extend: 'excelHtml5',
			text: _("エクセル"),
			exportOptions: {
				columns: exportColumns
			},
		},
		{
			extend: 'csvHtml5',
			text: _("CSV"),
			exportOptions: {
				columns: exportColumns
			},
		},
		{
			extend: 'copyHtml5',
			text: _("コピー"),
			exportOptions: {
				columns: exportColumns
			},
		},
		{
			extend: 'print',
			text: _("印刷"),
			exportOptions: {
				columns: exportColumns
			},
		},
		{
			extend: 'pdfHtml5',
			text: _("PDF"),
			exportOptions: {
				columns: exportColumns
			},
		},
		{
			text: _('JSON'),
			className: "buttons-json buttons-html5",
			action: function (e, dt, button, config) {
				var data = dt.buttons.exportData();
				$.fn.dataTable.fileSave(
					new Blob([JSON.stringify(data)]),
					'Export.json'
				);
			}
		}
	];

	dt_parameters["buttons"] = [
		{
			fade: 100,
			className: "dt_button_clear_filter",
			titleAttr: _("絞込の解除"),
			enabled: false,
			text: '<i class="fa fa-lg fa-remove"></i> <span class="dt-button-text"></span>',
			action: function (e, dt, node, config) {
				dt.search("").draw("page");
				node.addClass("disabled");
			}
		},
		{
			extend: 'colvis',
			fade: 100,
			columnText: function (dt, idx, title) {
				return (idx + 1) + ': ' + title;
			},

			//columns: included_ids,
			columns: ":gt(0)",
			className: "columns_controls",
			titleAttr: _("列の設定"),
			//text: '<i class="fa fa-lg fa-gear"></i> <span class="dt-button-text">' + _("列") + '</span>',
			text: '<i class="fa fa-lg fa-gear"></i> <span class="dt-button-text"></span>',
			exportOptions: {
				columns: exportColumns
			},
		},
		{
			extend: 'collection',
			autoClose: true,
			fade: 100,
			className: "export_controls",
			titleAttr: _("エクスポート"),
			text: '<i class="fa fa-lg fa-download"></i> <span class="dt-button-text"></span>',
			buttons: export_buttons
		}

	];


	var table = $(selector);
	table.dataTable($.extend(true, {}, dataTablesDefaults, dt_parameters));


	$(hidden_ids).each(function (index, value) {
		table.fnSetColumnVis(value, false);
	});

	$(".dt_button_clear_filter, .columns_controls, .export_controls").tooltip();
	return table;
}