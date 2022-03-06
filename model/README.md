A directory for the model, like classes/functions imported to and/or instanced in the front end. Classes follow single responsibility principle. Logical groups of classes/functions may be stored in sub-directories, aka packages or modules.

Map:
trivia unit: a question, answer, and choices.

Suggested Functions/Classes: responsibility
- TriviaCall: retrieve and pass a trivia unit from the OpenTriviaAPI to the function caller.
- TriviaStore: store and retrieve trivia units to/from function caller. Retrieve: removes from top of json. Store: Appends to bottom of json.
