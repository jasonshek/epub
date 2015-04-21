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
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("symbols_animation_p7").play();
         
         // Set a toggle to hide or show an element 
         if (!sym.$("symbols_animation_p7").is(':visible')){
         	sym.$("play_btn").show();
         	} else {
         	sym.$("play_btn").hide();
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.getSymbol("symbols_animation_p7").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17441, function(sym, e) {
         // Replay from the beginning, regardless of current playing state 
         if (!sym.getSymbol("symbols_animation_p7").isPlaying() ) {
         	sym.getSymbol("symbols_animation_p7").play(0);
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_r}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("../b-10/b-10.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_l}", "click", function(sym, e) {
         window.open("../b-08/b-08.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_home}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("../../1_index/cover.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bu_mandarin}", "click", function(sym, e) {
         window.open("../b-09m/b-09m.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'symbol_animation_p7'
   (function(symbolName) {   
   
   })("symbols_animation_p7");
   //Edge symbol end:'symbols_animation_p7'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20141121-P7");