   var options = {
    // changes the value of 'this' in the success, error, timeout and complete
    // handlers. The default value of 'this' is the instance of the PrintNodeApi
    // object used to make the api call
    context: null,
    // called if the api call was a 2xx success
    success: function (response, headers, xhrObject) {
        console.log(this);
        console.log("success", response, headers);
    },
    // called if the api call failed in any way
    error: function (response, headers, xhrObject) {
        console.log("error", response, headers);
    },
    // called afer the api call has completed after success or error callback
    complete: function (response) {
      console.log(

          response.xhr.status,
          response.reqMethod,
          response.reqUrl,
          response.xhr.responseText.length,
          response.getDuration()
      );
    },
    // called if the api call timed out
    timeout: function (url, duration) {
        console.log("timeout", url, duration)
    },
    // the timeout duration in ms
    timeoutDuration: 3000
};

var api = new PrintNode.HTTP(
    new PrintNode.HTTP.ApiKey('your_api_key'),
    options
);

//convert api call(hard-coded) to a html select

const json ='[{"capabilities":{"bins":["Standaard"],"collate":false,"color":false,"copies":1,"dpis":["200x100","200x200"],"duplex":false,"extent":[[0,0],[2160,3556]],"medias":[],"nup":[],"papers":{"102 x 152 mm (4 x 6 in)":[1016,1524],"13 x 20 cm (5 x 8 in)":[1270,2032],"16:9 wide size (102 x 181 mm)":[1016,1806],"6 3/4-envelop":[920,1651],"89 x 127 mm (3.5 x 5 in)":[889,1270],"A4":[2100,2970],"A4 (klein)":[2100,2970],"A4 Plus":[2100,3300],"A4 Transverse":[2100,2970],"A5":[1480,2100],"A5 (gedraaid)":[2100,1480],"A5 Extra":[1740,2350],"A5 Transverse":[1480,2100],"A6":[1050,1480],"A6 (gedraaid)":[1480,1050],"B5 (ISO) Extra":[2010,2760],"B5 (JIS)":[1820,2570],"B5 (JIS) Transverse":[1820,2570],"B6 (JIS - gedraaid)":[1820,1280],"B6 (JIS)":[1280,1820],"Chin. envelop nr. 1 (gedraaid)":[1650,1020],"Chin. envelop nr. 2 (gedraaid)":[1760,1020],"Chin. envelop nr. 3 (gedraaid)":[1760,1250],"Chin. envelop nr. 4 (gedraaid)":[2080,1100],"Chinese 16K":[1880,2600],"Chinese 32K":[1300,1840],"Chinese 32K (gedraaid)":[1840,1300],"Chinese 32K (groot - gedraaid)":[2030,1400],"Chinese 32K (groot)":[1400,2030],"Chinese envelop nr. 1":[1020,1650],"Chinese envelop nr. 2":[1020,1760],"Chinese envelop nr. 3":[1250,1760],"Chinese envelop nr. 4":[1100,2080],"Chinese envelop nr. 5":[1100,2200],"Chinese envelop nr. 6":[1200,2300],"Chinese envelop nr. 7":[1600,2300],"Chinese envelop nr. 8":[1200,3090],"Dubb. Japanse kaart (gedraaid)":[1480,2000],"Duits Legal Kettingpapier":[2159,3302],"Duits standaardkettingpapier (V":[2159,3048],"Envelop":[1100,2300],"Envelop B5":[1760,2500],"Envelop B6":[1760,1250],"Envelop C5":[1620,2290],"Envelop C6":[1140,1620],"Envelop C65":[1140,2290],"Envelop DL":[1100,2200],"Envelop Monarch":[984,1905],"Envelop nr. 10":[1047,2413],"Envelop nr. 11":[1143,2635],"Envelop nr. 12":[1206,2794],"Envelop nr. 14":[1270,2921],"Envelop nr. 9":[984,2254],"Executive":[1841,2667],"Folio":[2159,3302],"Gereserveerd48":[0,0],"Gereserveerd49":[0,0],"Japan 2 LPhoto":[1270,1780],"Japan LPhoto":[890,1270],"Japanse briefkaart":[1000,1480],"Japanse briefkaart (gedraaid)":[1480,1000],"Japanse dubbele briefkaart":[2000,1480],"Japanse env. Chou 4 (gedraaid)":[2050,900],"Japanse envelop Chou nr. 3":[1200,2350],"Japanse envelop Chou nr. 4":[900,2050],"Japanse envelop Kaku nr. 3":[2160,2770],"Japanse envelop You nr. 4":[1050,2350],"Kwarto":[2150,2750],"Legal":[2159,3556],"Letter":[2159,2794],"Letter (klein)":[2159,2794],"Letter Plus":[2159,3223],"Letter Transverse":[2159,2794],"Memo":[2159,2794],"North America 4x 6":[1016,1524],"North America 8x 10":[2032,2540],"Overzicht":[1397,2159],"Postcard":[999,1480]},"printrate":null,"supports_custom_paper_size":false},"computer":{"createTimestamp":"2022-03-09T11:13:01.433Z","hostname":"AZERAPI$@AZERAPI","id":419149,"inet":"192.168.1.10","inet6":null,"jre":null,"name":"AZERAPI","state":"connected","version":"4.26.12"},"createTimestamp":"2022-03-09T11:13:01.605Z","default":false,"description":"Microsoft Shared Fax Driver","id":71153273,"name":"Fax","state":"online"},{"capabilities":{"bins":["Automatisch selecteren","Bovenste papierlade"],"collate":false,"color":true,"copies":1,"dpis":["600x600"],"duplex":false,"extent":[[984,1905],[2970,4318]],"medias":[],"nup":[],"papers":{"A3":[2970,4200],"A4":[2100,2970],"B4 (JIS)":[2570,3640],"B5 (JIS)":[1820,2570],"Envelop Monarch":[984,1905],"Envelop nr. 10":[1047,2413],"Executive":[1841,2667],"Legal":[2159,3556],"Letter":[2159,2794],"Tabloid":[2794,4318]},"printrate":null,"supports_custom_paper_size":false},"computer":{"createTimestamp":"2022-03-09T11:13:01.433Z","hostname":"AZERAPI$@AZERAPI","id":419149,"inet":"192.168.1.10","inet6":null,"jre":null,"name":"AZERAPI","state":"connected","version":"4.26.12"},"createTimestamp":"2022-03-09T11:13:01.605Z","default":false,"description":"AnyDesk v4 Printer Driver","id":71153274,"name":"AnyDesk Printer","state":"online"},{"capabilities":{"bins":["Doorlopende rol"],"collate":false,"color":false,"copies":9998,"dpis":["203x203"],"duplex":false,"extent":[[127,64],[1181,25146]],"medias":[],"nup":[1],"papers":{"2 x 4":[533,1016],"4 x 4":[1041,1016],"4 x 6":[1041,1524],"USER":[1041,1524]},"printrate":null,"supports_custom_paper_size":false},"computer":{"createTimestamp":"2022-03-09T11:13:01.433Z","hostname":"AZERAPI$@AZERAPI","id":419149,"inet":"192.168.1.10","inet6":null,"jre":null,"name":"AZERAPI","state":"connected","version":"4.26.12"},"createTimestamp":"2022-03-09T11:13:01.605Z","default":false,"description":"Citizen CL-E300","id":71153275,"name":"Citizen CL-E300","state":"offline"},{"capabilities":{"bins":[],"collate":false,"color":true,"copies":1,"dpis":["600x600"],"duplex":false,"extent":[[1397,2100],[2970,4318]],"medias":[],"nup":[],"papers":{"A3":[2970,4200],"A4":[2100,2970],"A5":[1480,2100],"B4 (JIS)":[2570,3640],"B5 (JIS)":[1820,2570],"Executive":[1841,2667],"Legal":[2159,3556],"Letter":[2159,2794],"Overzicht":[1397,2159],"Tabloid":[2794,4318]},"printrate":null,"supports_custom_paper_size":false},"computer":{"createTimestamp":"2022-03-09T11:13:01.433Z","hostname":"AZERAPI$@AZERAPI","id":419149,"inet":"192.168.1.10","inet6":null,"jre":null,"name":"AZERAPI","state":"connected","version":"4.26.12"},"createTimestamp":"2022-03-09T11:13:01.605Z","default":true,"description":"Microsoft Print To PDF","id":71153276,"name":"Microsoft Print to PDF","state":"online"},{"capabilities":{"bins":[],"collate":false,"color":true,"copies":1,"dpis":["600x600","1200x1200"],"duplex":false,"extent":[[984,1905],[2970,4318]],"medias":[],"nup":[],"papers":{"A3":[2970,4200],"A4":[2100,2970],"B4 (JIS)":[2570,3640],"B5 (JIS)":[1820,2570],"Envelop Monarch":[984,1905],"Envelop nr. 10":[1047,2413],"Executive":[1841,2667],"Legal":[2159,3556],"Letter":[2159,2794],"Tabloid":[2794,4318]},"printrate":null,"supports_custom_paper_size":false},"computer":{"createTimestamp":"2022-03-09T11:13:01.433Z","hostname":"AZERAPI$@AZERAPI","id":419149,"inet":"192.168.1.10","inet6":null,"jre":null,"name":"AZERAPI","state":"connected","version":"4.26.12"},"createTimestamp":"2022-03-09T11:13:01.605Z","default":false,"description":"Send to Microsoft OneNote 16 Driver","id":71153277,"name":"OneNote (Desktop)","state":"online"},{"capabilities":{"bins":["Automatisch selecteren"],"collate":true,"color":true,"copies":1,"dpis":["600x600"],"duplex":false,"extent":[[900,900],[8636,11176]],"medias":[],"nup":[],"papers":{"10 x 11":[2540,2794],"10 x 14":[2540,3556],"11 x 17":[2794,4318],"12 x 11":[3049,2795],"15 x 11":[3810,2794],"6 3/4-envelop":[920,1651],"9 x 11":[2286,2794],"A2":[4200,5940],"A3":[2970,4200],"A3 (gedraaid)":[4200,2970],"A3 Extra":[3220,4450],"A3 Extra Transverse":[3220,4450],"A3 Transverse":[2970,4200],"A4":[2100,2970],"A4 (gedraaid)":[2970,2100],"A4 (klein)":[2100,2970],"A4 Extra":[2354,3223],"A4 Plus":[2100,3300],"A4 Transverse":[2100,2970],"A5":[1480,2100],"A5 (gedraaid)":[2100,1480],"A5 Extra":[1740,2350],"A5 Transverse":[1480,2100],"A6":[1050,1480],"A6 (gedraaid)":[1480,1050],"B4 (ISO)":[2500,3530],"B4 (JIS - gedraaid)":[3640,2570],"B4 (JIS)":[2570,3640],"B5 (ISO) Extra":[2010,2760],"B5 (JIS - gedraaid)":[2570,1820],"B5 (JIS)":[1820,2570],"B5 (JIS) Transverse":[1820,2570],"B6 (JIS - gedraaid)":[1820,1280],"B6 (JIS)":[1280,1820],"C-formaat":[4318,5588],"Chin. envelop nr. 1 (gedraaid)":[1650,1020],"Chin. envelop nr. 3 (gedraaid)":[1760,1250],"Chin. envelop nr. 4 (gedraaid)":[2080,1100],"Chin. envelop nr. 5 (gedraaid)":[2200,1100],"Chin. envelop nr. 6 (gedraaid)":[2300,1200],"Chin. envelop nr. 7 (gedraaid)":[2300,1600],"Chin. envelop nr. 8 (gedraaid)":[3090,1200],"Chin. envelop nr. 9 (gedraaid)":[3240,2290],"Chinese envelop nr. 1":[1020,1650],"Chinese envelop nr. 10":[3240,4580],"Chinese envelop nr. 3":[1250,1760],"Chinese envelop nr. 4":[1100,2080],"Chinese envelop nr. 5":[1100,2200],"Chinese envelop nr. 6":[1200,2300],"Chinese envelop nr. 7":[1600,2300],"Chinese envelop nr. 8":[1200,3090],"Chinese envelop nr. 9":[2290,3240],"D-formaat":[5588,8636],"Dubb. Japanse kaart (gedraaid)":[1480,2000],"Duits Legal Kettingpapier":[2159,3302],"Duits standaardkettingpapier (V.S.)":[2159,3048],"E-formaat":[8636,11176],"Envelop":[1100,2300],"Envelop B4":[2500,3530],"Envelop B5":[1760,2500],"Envelop B6":[1760,1250],"Envelop C3":[3240,4580],"Envelop C4":[2290,3240],"Envelop C5":[1620,2290],"Envelop C6":[1140,1620],"Envelop C65":[1140,2290],"Envelop DL":[1100,2200],"Envelop Monarch":[984,1905],"Envelop nr. 10":[1047,2413],"Envelop nr. 11":[1143,2635],"Envelop nr. 12":[1206,2794],"Envelop nr. 14":[1270,2921],"Envelop nr. 9":[984,2254],"Executive":[1841,2667],"Folio":[2159,3302],"Formaat gedefinieerd door gebruiker":[2100,2970],"Grootboek":[4318,2794],"Japanse briefkaart":[1000,1480],"Japanse briefkaart (gedraaid)":[1480,1000],"Japanse dubbele briefkaart":[2000,1480],"Japanse env. Chou 3 (gedraaid)":[2350,1200],"Japanse env. Chou 4 (gedraaid)":[2050,900],"Japanse env. Kaku 2 (gedraaid)":[3320,2400],"Japanse env. Kaku 3 (gedraaid)":[2770,2160],"Japanse env. You 4 (gedraaid)":[2350,1050],"Japanse envelop Chou nr. 3":[1200,2350],"Japanse envelop Chou nr. 4":[900,2050],"Japanse envelop Kaku nr. 2":[2400,3320],"Japanse envelop Kaku nr. 3":[2160,2770],"Japanse envelop You nr. 4":[1050,2350],"Kwarto":[2150,2750],"Legal":[2159,3556],"Legal Extra":[2413,3810],"Letter":[2159,2794],"Letter (gedraaid)":[2794,2159],"Letter (klein)":[2159,2794],"Letter Extra":[2413,3048],"Letter Extra Transverse":[2413,3048],"Letter Plus":[2159,3223],"Letter Transverse":[2159,2794],"Memo":[2159,2794],"Overzicht":[1397,2159],"Standaardkettingpapier (V.S.)":[3778,2794],"Super A":[2270,3560],"Super B":[3050,4870],"Tabloid":[2794,4318],"Uitnodiging":[2200,2200]},"printrate":null,"supports_custom_paper_size":false},"computer":{"createTimestamp":"2022-03-09T11:13:01.433Z","hostname":"AZERAPI$@AZERAPI","id":419149,"inet":"192.168.1.10","inet6":null,"jre":null,"name":"AZERAPI","state":"connected","version":"4.26.12"},"createTimestamp":"2022-03-09T11:13:01.605Z","default":false,"description":"Microsoft XPS Document Writer v4","id":71153278,"name":"Microsoft XPS Document Writer","state":"online"}]'

const obj = JSON.parse(json);
console.log(obj);
var size = Object.keys(obj).length;
console.log('aantal in Object is ' + size);
console.log(JSON.stringify(obj));
var htmlstring = '';
for (const [key, value] of Object.entries(obj)) {
  //Kijk hier naar de inhoud als je wilt: console.log(`${key}: ${value}`);
      console.log(value['id']);
      htmlstring += '<option value="' + value['id'] + '">' + value['id'] + " " + "-" + " " + value['name'] + '</option>';

}
console.log(htmlstring);
document.getElementById("id").innerHTML = htmlstring;



//function to build a pdf label, convert to base64 and place insite url textbox(not visible)
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
  
  doc.setFontSize(25);
  doc.text(`${id2}`, 1.3, 0.8);
  doc.setFontSize(10);
  doc.text(`${typeLevering2}`, 1.2, 1);
  doc.text(`${filial2}`, 1.3, 1.3);
  doc.text(`${datum}`,1.5, 1.6 );
  doc.setFontSize(20);
  doc.text(`${naam}`, 0, 1.9);
  doc.setFontSize(8);
  doc.text(`${telefone}`, 0, 2.);
  doc.text(`${adress}`, 0, 2.2);
  doc.text(`${postcode}`, 0, 2.5);

  //take blob and convert to base64
  blob = doc.output('blob');

  var reader = new FileReader();
  reader.readAsDataURL(blob);
  

  reader.onload = function () {

    var b64 = reader.result.replace(/^data:.+;base64,/, '');
    
    console.log(b64);
    document.getElementById('url').value = b64;

  };
};

//function to send a printjob to printnode. check's for user input in index.php. takes pdf bas64 as a print content type.
function printJobQue(){
    var select = document.getElementById("id");
    var value = select.options[select.selectedIndex].value;
  
    var printTitle = document.getElementsByName("title")[0].value;
    var printUrl = document.getElementsByName("url")[0].value;
    console.log(printUrl);
       var printJobPayload = {
        "printerId": value,
        "title": printTitle,
        "contentType": "pdf_base64",
        "content": `${printUrl}`,
        "source": "javascript api client"
        }
        //make a print job using information from the above payload
        api.createPrintjob(options, printJobPayload);
  
};
