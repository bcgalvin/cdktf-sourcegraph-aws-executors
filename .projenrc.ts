import { ArrowParens, TrailingComma } from 'projen/lib/javascript';
import { TerraformModule } from 'projen-cdktf-hybrid-construct';

const moduleVersion = '5.0.1';
const commonIgnore = ['.idea', '.vscode'];

const project = new TerraformModule({
  author: 'Bryan Galvin',
  authorAddress: 'bcgalvin@gmail.com',
  defaultReleaseBranch: 'main',
  devDeps: ['projen-cdktf-hybrid-construct'],
  name: 'cdktf-sourcegraph-aws-executors',
  repositoryUrl: 'https://github.com/bcgalvin/cdktf-sourcegraph-aws-executors.git',
  cdktfVersion: '0.17.0',
  typescriptVersion: '4.9.5',
  terraformModules: [
    {
      name: 'executors',
      source: 'sourcegraph/executors/aws',
      version: `~> ${moduleVersion}`,
    },
    {
      name: 'executors_credentials',
      source: 'sourcegraph/executors/aws//modules/credentials',
      version: `~> ${moduleVersion}`,
    },
    {
      name: 'executors_networking',
      source: 'sourcegraph/executors/aws//modules/networking',
      version: `~> ${moduleVersion}`,
    },
    {
      name: 'executors_docker-mirror',
      source: 'sourcegraph/executors/aws//modules/docker-mirror',
      version: `~> ${moduleVersion}`,
    },
    {
      name: 'executors_executors',
      source: 'sourcegraph/executors/aws//modules/executors',
      version: `~> ${moduleVersion}`,
    },
  ],
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      trailingComma: TrailingComma.ALL,
      arrowParens: ArrowParens.ALWAYS,
      singleQuote: true,
    },
  },
  eslintOptions: {
    dirs: ['src'],
    ignorePatterns: ['src/terraformModules.ts'], // permissions issue w projen plugin
  },
  // Ignore files
  gitignore: commonIgnore,
  release: false,

  projectId: 'cdktf-sourcegraph-aws-executors',
});

project.synth();
