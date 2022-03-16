<!DOCTYPE html>
    <html>
    <head>

   
        <link rel="stylesheet" href="css/style.css">
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js"></script>
    </head>
    <body>
    

        
        <div class="title" style="display:flex; justify-content: center;">
            <h2><a href="/index.php" style="color:white;"> PrintNode JS PDF</a></h2>
         </div>       
        <div class="forms" style="display:flex; justify-content:center;">
            <div class="formsContainer" style=" display:flex; justify-content:center;">
                <form style="width:100%"action="#">
                    <input style="width:100%;" type="text" id="pdfId" name="pdfId" placeholder="Order Id">
                    <br>
                    <input style="width:100%;"  type="text" name="typeLevering" id="typeLevering" placeholder="type Levering">
                    <br>
                    <input style="width:100%;"type="text" name="filial" id="filiaal" placeholder="Filial">
                    <br>
                    <input type="text" style="width:100%;" name="datum" id="datum" placeholder="datum">
                    <br>
                    <input type="text" style="width:100%;" name="naam" id="naam" placeholder="bijv, JACK RESTAURANT">
                    <br>
                    <input type="text" style="width:100%;" name="adress" id="adress" placeholder="Adress">
                    <br>
                    <input type="text"  style="width:100%;"name="postcode" id="postcode" placeholder="Postcode">
                    <br>
                    <input type="tel" style="width:100%;" name="telefone" id="telefone" placeholder="904809328 - pietje 03988298"> 
                    
                </form>
                <button onclick="makePDF()">maak PDF</button>
            </div>
        </div>        
        <div class="container" id="container" style="text-align:center;">
            <p id="error" style="color:red; font-weight:bold; display:none;">Voer een geldige link of titel in!</p>
            <p id="succes" style="color:green; font-weight: bold; display:none;">Opdracht naar printer gestuurd</p>
            
        </div> 
        
    </body>
    <script type='text/javascript' src="./src/pdf.js"></script>
    <script type='text/javascript' src="./src/ws.js"></script>
        <script type='text/javascript' src="./src/printer.js"></script>
        
</html>