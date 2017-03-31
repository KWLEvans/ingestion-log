# Ingestion Log

Welcome Administrator. This system is made available to track nutrient ingestion by all subjects. Use it to track type and value of nourishment per day. In the unthinkable circumstance of erroneous data, entries can be edited post facto. Good luck, humans are notoriously difficult to feed.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular2](https://github.com/angular/angular)
* [Angular-CLI](https://github.com/angular/angular-cli)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/KWLEvans/ingestion-log
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```
```console
bower install
```

**Step 3**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 4**: Visit the app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
  * Install **bootstrap** and save as a dependency in bower.json for easier styling
  ```console
  bower install bootstrap --save
  ```
  * Add **bootstrap** to angular-cli.json under "styles"
  * Install **moment** and save as a dependency in bower.json for easier timestamps
  ```console
  bower install moment --save
  ```
  * Add **moment** to angular-cli.json under "scripts"

2. Specs
  * **Spec 1**: Users can post a log object containing name, calories, and details of a food
  * **Spec 2**: Users can view a full list of all log entries
  * **Spec 3**: Users can edit individual entries
  * **Spec 4**: Users can delete individual entries
  * **Spec 5**: Users can sort entries by calorie count

3. Integration
  * `log.model`: model for `log` objects
  * `app.component`: base page looping through all entries
    * `calorie.pipe`: custom pipe to sort `log` objects by calorie value
    * `log-tile.component`: component loaded for each `log` object to display details
      * `edit-log.component`: component on each `log-tile` to allow editing of specific `log` objects

4. UX/UI
  * Include bootstrap
  * Develop custom style
  * Make it all robots

5. Polish
  * Make README awesome

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

MIT License. Copyright 2017 Keith Evans
