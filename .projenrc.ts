import { TerraformModule } from "projen-cdktf-hybrid-construct";
const project = new TerraformModule({
  author: "Bryan Galvin",
  authorAddress: "bcgalvin@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  name: "cdktf-sourcegraph-aws-executors",
  repositoryUrl:
    "https://github.com/bcgalvin/cdktf-sourcegraph-aws-executors.git",

  // cdktfVersion: "^0.13.0",      /* Minimum target version of this library. */
  // deps: [],                     /* Runtime dependencies of this module. */
  // description: undefined,       /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,       /* The "name" in package.json. */
  // terraformModules: undefined,  /* List of modules to generate bindings for. */
});
project.synth();
