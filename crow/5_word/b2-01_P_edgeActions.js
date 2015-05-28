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
         window.open("../1_index/index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_l}", "click", function(sym, e) {
         window.open("../4_story/b-10_2/b-10.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_r}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("b2-02_P.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_cantonese}", "click", function(sym, e) {
         window.open("b2-01.html", "_self");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("Symbol_1").stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play_button}", "click", function(sym, e) {
         sym.getSymbol("Symbol_1").play();
         
         // Set a toggle to hide or show an element 
         if (!sym.$("Symbol_1").is(':visible')){
         	sym.$("play_button").show();
         	} else {
         	sym.$("play_button").hide();
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'highlight'
   (function(symbolName) {   
   
   })("highlight");
   //Edge symbol end:'highlight'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11121547");