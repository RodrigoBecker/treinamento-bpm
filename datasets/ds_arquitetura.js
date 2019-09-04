function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("Nome");
	dataset.addColumn("Email");
	dataset.addColumn("CPF");
	
	dataset.addRow(new Array("Rodrigo",'rodrigo.more@totvs.com.br','50069056879'));
	dataset.addRow(new Array("Peter",'peter.tapia@totvs.com.br','0000343099'));
	dataset.addRow(new Array("Paula",'paula.lopes@totvs.com.br','6565980865'));
	dataset.addRow(new Array("Felipe",'felipe.@totvs.com.br','6565980865'));


	return dataset;
	

}function onMobileSync(user) {

}