function makePDF(){

var id2 = document.getElementsByName('pdfId')[0].value;
var typeLevering = document.getElementsByName('typeLevering')[0].value;
var filial = document.getElementsByName('filial')[0].value;
var datum = document.getElementsByName('datum')[0].value;
var naam = document.getElementsByName('naam')[0].value;
var adress = document.getElementsByName('adress')[0].value;
var postcode = document.getElementsByName('postcode')[0].value;
var telefone = document.getElementsByName('telefone')[0].value;

var typeLevering2 = "Type levering: " + typeLevering;
var filial2 =  "Filiaal: " + filial;

var doc = new jsPDF({
  unit: "in",
  format: [4, 6]
});

doc.setFontSize('25px');
doc.text(`${id2}`, 1.3, 0.8);
doc.setFontSize('10px');
doc.text(`${typeLevering2}`, 1.2, 1);
doc.text(`${filial2}`, 1.3, 1.3);
doc.text(`${datum}`,1.5, 1.6 );
doc.setFontSize('20px');
doc.text(`${naam}`, 0, 1.9);
doc.setFontSize('8px');
doc.text(`${adress}`, 0, 2.2);
doc.text(`${postcode}`, 0, 2.5);
doc.text(`${telefone}`, 0, 2.6);
doc.setFontSize('5px');
doc.text('poissione & cuissine B.V. meester', 0, 2.7);

output = doc.output('blob');
var reader = new FileReader();

// The magic always begins after the Blob is successfully loaded
reader.onload = function () {
  // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
  var b64 = reader.result.replace(/^data:.+;base64,/, '');
  console.log(b64); //-> "V2VsY29tZSB0byA8Yj5iYXNlNjQuZ3VydTwvYj4h"

  // Decode the Base64 string and show result just to make sure that everything is OK
  var html = atob(b64);
  console.log(html); //-> "Welcome to <b>base64.guru</b>!"
};

// Since everything is set up, let’s read the Blob and store the result as Data URI
reader.readAsDataURL(output);




};