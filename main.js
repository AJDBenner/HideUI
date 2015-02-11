/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets: true*/

define(function (require, exports, module) {
"use strict";

	var CommandManager 	= brackets.getModule("command/CommandManager"),
	Menus          		= brackets.getModule("command/Menus"),
	AppInit        		= brackets.getModule("utils/AppInit"),
	Commands 			= brackets.getModule("command/Commands"),
	Resizer        		= brackets.getModule("utils/Resizer");

	/**
	 * By default this extension will remove top and side bars
	 */
	function init(){
		hide();
	}


	/**
	 * This function would show all UI elements that were hidden
	 * Currently not implimented
	 */
	function show() {

	}

	/**
	 * This function calls all the hide functions
	 */
	function hide() {
		removeMainToolBar();
		removeLeftSideToolBar();
		removeRightSideToolBar();
	}

	/**
	 * This function merely removes the left side tool bar
	 */
	function removeLeftSideToolBar() {
		Resizer.hide("#sidebar");
	}

	/**
	 * Used to remove the top tool bar
	 */
	function removeMainToolBar() {
		//remove the file menu
		Menus.removeMenu(Menus.AppMenuBar.FILE_MENU);

		//remove the edit menu
		Menus.removeMenu(Menus.AppMenuBar.EDIT_MENU);

		//remove the find menu
		Menus.removeMenu(Menus.AppMenuBar.FIND_MENU);

		//remove the view menu
		Menus.removeMenu(Menus.AppMenuBar.VIEW_MENU);

		//remove the navigate menu
		Menus.removeMenu(Menus.AppMenuBar.NAVIGATE_MENU);

		//remove the help menu
		Menus.removeMenu(Menus.AppMenuBar.HELP_MENU);
	}

	/**
	 * Used to remove the left side tool bar
	 */
	function removeRightSideToolBar() {
		Resizer.makeResizable("#main-toolbar");
		Resizer.hide("#main-toolbar");
		var _edits = $('.main-toolbar').hide();
	    _edits = $('.content').css("right","0");
	}

	AppInit.appReady(function(){
		init();
	});

	// Define public API
	exports.hide = hide;
	exports.removeMainToolBar = removeMainToolBar;
	exports.removeLeftSideToolBar = removeLeftSideToolBar;
	exports.removeRightSideToolBar = removeRightSideToolBar;


});
