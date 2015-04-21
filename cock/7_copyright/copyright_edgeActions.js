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
      
      
      Symbol.bindElementAction(compId, symbolName, "${bu_home}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("../1_index/cover.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_l}", "click", function(sym, e) {
         window.open("../6_quiz/quiz_2/d-08.html", "_self");

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.getSymbol("wrong2").stop();
         sym.getSymbol("right2").stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bu1'
   (function(symbolName) {   
   
   })("bu1");
   //Edge symbol end:'bu1'

   //=========================================================
   
   //Edge symbol: 'bu2'
   (function(symbolName) {   
   
   })("bu2");
   //Edge symbol end:'bu2'

   //=========================================================
   
   //Edge symbol: 'bu3'
   (function(symbolName) {   
   
   })("bu3");
   //Edge symbol end:'bu3'

   //=========================================================
   
   //Edge symbol: 'bu4'
   (function(symbolName) {   
   
   })("bu4");
   //Edge symbol end:'bu4'

   //=========================================================
   
   //Edge symbol: 'bu5'
   (function(symbolName) {   
   
   })("bu5");
   //Edge symbol end:'bu5'

   //=========================================================
   
   //Edge symbol: 'bu6'
   (function(symbolName) {   
   
   })("bu6");
   //Edge symbol end:'bu6'

   //=========================================================
   
   //Edge symbol: 'wrong'
   (function(symbolName) {   
   
   })("wrong");
   //Edge symbol end:'wrong'

   //=========================================================
   
   //Edge symbol: 'wrong_1'
   (function(symbolName) {   
   
   })("right");
   //Edge symbol end:'right'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11121547");