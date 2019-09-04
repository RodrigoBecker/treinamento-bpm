
function createDataset(fields, constraints, sortFields) {
	
	var num1 = 4;
	var num2 = 5;
	var result = num1/num2;;
	
		
	 var dataset = DatasetBuilder.newDataset();    
     dataset.addColumn('teste');
     
     
     
     dataset.addRow(new Array(result.toString()));
 	
     
     return dataset;

}