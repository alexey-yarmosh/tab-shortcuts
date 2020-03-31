// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tab-shortcuts" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('extension.chooseSecondOption', function () {
		vscode.window.showInformationMessage('2nd option was chosen!');
		vscode.commands.executeCommand('acceptSelectedSuggestion');
		vscode.commands.executeCommand('insertNextSuggestion');
	});

	let disposable2 = vscode.commands.registerCommand('extension.chooseThirdOption', function () {
		vscode.window.showInformationMessage('3rd option was chosen!');
		vscode.commands.executeCommand('acceptSelectedSuggestion');
		vscode.commands.executeCommand('insertNextSuggestion');
		vscode.commands.executeCommand('insertNextSuggestion');
	});

	context.subscriptions.push(disposable1, disposable2);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
