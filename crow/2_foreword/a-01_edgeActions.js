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
         window.open("../1_index/index.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_l}", "click", function(sym, e) {
         window.open("../1_index/index.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_r}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("../2_foreword/a-02.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11121547");