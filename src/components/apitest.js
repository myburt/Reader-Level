import $ from "jquery";

var model = {
  wordSubmissions: []
};

//https://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=273375a7-8687-4278-b1b4-5fa85ac0631b
function checkIfWordIsReal(word) {
  // make an AJAX call to the dictionaryapi

  let entryStore = [];
  $.ajax({
    type: "GET",
    url:
      "https://www.dictionaryapi.com/api/v1/references/collegiate/xml/" +
      word +
      "?key=273375a7-8687-4278-b1b4-5fa85ac0631b",
    dataType: "xml",
    success: function(xml) {
      if ($(xml).find("suggestion").length) {
      } else {
        $(xml)
          .find("entry")
          .each(function() {
            let syllable = $(this)
              .find("hw")
              .text();
            entryStore.push(syllable);
          });
      }

      var syllables;

      if (entryStore.length > 0) {
        syllableArray = entryStore[0].split("*");
        syllables = syllableArray.length;
      } else {
        syllables = word.length / 4;
      }
      console.log(syllables);
    },
    error: function() {
      alert("An error occurred while processing XML file.");
    }
  });
}

//above here works---------------------------------------------------------------------------------------------

String.prototype.allTrim = String.prototype.allTrim ||
     function(){
        return this.replace(/\s+/g,' ')
                   .replace(/^\s+|\s+$/,'');
     };


$('#page').on("change", function() {
		var rawText = $('#page').val();
/*Sentence Count*/
var text = rawText;
text = text.replace(/[\.!\?]+/g, "."); //convert all sentence ends to period
text = text.replace(/[0-9]\.[0-9]/g, "DECIM"); //remove uses when number either side e.g. 37.2 degrees
text = text.replace(/[^A-Za-z\.]/g, " ");
text = text.replace(
  /\se\.g\.|\si\.e\.|\smr\.|\smrs\.|\sdr\.|\sms\.|\setc\.|\shwy\.|\srd\.|\sst\.|\spde\.|\scol\.|\sphd\.|\sbsc\.|\sc\.|\sca\.|\sb\.c\.|\sa\.d\.|\sb\.c\.e\.|\sb\.a\.|\scapt\.|\scent\.|\scorp\.|\scomdr\.|\scal\.|\sgal\.|\sdist\.|\sest\.|\set al\.|\sed\.|\sdiv\.|\sdec\.|\sjan\.|\sfeb\.|\smar\.|\sapr\.|\sjun\.|\sjul\.|\saug\.|\ssept\.|\soct\.|\snov\.|\sgov\.|\slat\.|\sm\.d\.|\smg\.|\smt\spl\.|\spop\.|\srev\.|\sr\.n\.|\svol\.|\ssr\.|\ssgt\.|\suniv\.|\svs\.|\swt\./gi,
  "ABBRV"
);
var sentenceArray = text.split(".");
lastChar = rawText.slice(-1);
if (lastChar == "." || lastChar == "?" || lastChar == "!") {
  sentenceArray.pop();
}
sentenceCount = sentenceArray.length;

/*Word Count*/
wordCount = rawText.allTrim().split(" ").length;
if (rawText.allTrim() == " ") {
  wordCount = 0;
} //Temp bug fix
if (rawText == "") {
  wordCount = 0;
} //Temp bug fix
