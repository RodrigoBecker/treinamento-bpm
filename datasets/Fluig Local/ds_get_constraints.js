function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();
    
    var ccod = DatasetFactory.createConstraint("ccod", "000049", "000049", ConstraintType.MUST);
    var dataset = DatasetFactory.getDataset("sb1",null, new Array (ccod), null);
    
	return dataset;
	
	
	
}function onMobileSync(user) {

}