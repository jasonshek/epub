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
         window.open("../4_story/b-10/b-10.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_r}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("b2-02.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_mandarin}", "click", function(sym, e) {
         window.open("b2-01_P.html", "_self");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("symbols_animation").stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play_button2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("symbols_animation").play();
         
         // Set a toggle to hide or show an element 
         if (!sym.$("symbols_animation").is(':visible')){
         	sym.$("play_button2").show();
         	} else {
         	sym.$("play_button2").hide();
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
   
   //Edge symbol: 'symbols_animation'
   (function(symbolName) {   
   
   })("symbols_animation");
   //Edge symbol end:'symbols_animation'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11121547");