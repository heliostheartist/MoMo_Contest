import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const cases = [
  ["receipt.schema.json", "receipt.example.json"],
  ["splitrule.schema.json", "splitrule.example.json"],
  ["allocation.schema.json", "allocation.example.json"],
];

test("all example files satisfy their JSON Schema", async () => {
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  addFormats(ajv);

  for (const [schemaName, exampleName] of cases) {
    const schemaPath = path.join(projectRoot, "schemas", schemaName);
    const examplePath = path.join(projectRoot, "schemas", "examples", exampleName);
    const schema = JSON.parse(await readFile(schemaPath, "utf8"));
    const example = JSON.parse(await readFile(examplePath, "utf8"));

    assert.equal(ajv.validateSchema(schema), true, `${schemaName} is not a valid schema`);
    const validate = ajv.compile(schema);
    assert.equal(
      validate(example),
      true,
      `${exampleName} does not match ${schemaName}: ${JSON.stringify(validate.errors)}`,
    );
  }
});
