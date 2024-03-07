// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "rcr" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // let disposable = vscode.commands.registerCommand('rcr.helloWorld', () => {
  // 	// The code you place here will be executed every time your command is executed
  // 	// Display a message box to the user
  // 	vscode.window.showInformationMessage('Hello World from react-code-regions!');
  // });

  let disposable = vscode.commands.registerCommand("rcr.insertComment", () => {
    // Lista dei commenti disponibili nel menu
    const comments: string[] = [
      "hooks",
      "state",
      "effects",
      "api",
      "functions",
      "renders",
    ];

    // Mostra il menu per selezionare un commento
    vscode.window
      .showQuickPick(comments, {
        placeHolder: "Select the region marker you want to insert",
      })
      .then((selectedComment) => {
        if (selectedComment) {
          // Ottieni l'editor attivo
          let editor = vscode.window.activeTextEditor;
          if (editor) {
            // Ottieni la selezione corrente
            let selection = editor.selection;
            let range = new vscode.Range(selection.start, selection.end);

            // Inserisci il commento selezionato nella posizione corrente
            editor.edit((editBuilder) => {
              const formattedComment = `// ${selectedComment}`;
              editBuilder.replace(range, formattedComment);
            });
          }
        }
      });
  });

  
  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
