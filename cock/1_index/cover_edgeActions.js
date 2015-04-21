/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "swipeleft", function(sym, e) {
         sym.play("booktitle");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_01-bu1}", "click", function(sym, e) {
         window.open("../2_foreword/a-01/a-01.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_01-bu2}", "click", function(sym, e) {
         window.open("../4_story/b-03/b-03.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_01-bu3}", "click", function(sym, e) {
         window.open("../6_quiz/quiz_1/c-01.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_01-bu4}", "click", function(sym, e) {
         window.open("../7_copyright/copyright.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_01-bu1b2}", "click", function(sym, e) {
         window.open("../3_intro/a2-01/a2-01.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_01-bu2b2}", "click", function(sym, e) {
         window.open("../5_word_learning/b2-01.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'booktitle'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.play(booktitle);
         

      });
      //Edge binding end

   })("booktitle");
   //Edge symbol end:'booktitle'

   //=========================================================
   
   //Edge symbol: 'mov_01'
   (function(symbolName) {   
   
   })("mov_01");
   //Edge symbol end:'mov_01'

   //=========================================================
   
   //Edge symbol: 'mov_2'
   (function(symbolName) {   
   
   })("mov_2");
   //Edge symbol end:'mov_2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6758604");