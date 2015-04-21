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
      
      
      Symbol.bindElementAction(compId, symbolName, "${bu_rCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("../../4_story/b-04_2/b-04.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_lCopy}", "click", function(sym, e) {
         window.open("../../3_intro/intro.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_homeCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("../../1_index/index.html", "_self");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${play_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.getSymbol("movie").play();
         
         // Hide an element 
         sym.$("play_btn").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         sym.getSymbol("movie").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_cantonese}", "click", function(sym, e) {
         window.open("../../4_story/b-03/b-03.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'movie'
   (function(symbolName) {   
   
   })("movie");
   //Edge symbol end:'movie'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-16827876");