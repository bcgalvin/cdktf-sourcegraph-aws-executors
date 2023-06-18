# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Executors <a name="Executors" id="cdktf-sourcegraph-aws-executors.Executors"></a>

Defines an Executors based on a Terraform module.

Docs at Terraform Registry: {@link https://registry.terraform.io/modules/sourcegraph/executors/aws/~> 5.0.1 sourcegraph/executors/aws}

#### Initializers <a name="Initializers" id="cdktf-sourcegraph-aws-executors.Executors.Initializer"></a>

```typescript
import { Executors } from 'cdktf-sourcegraph-aws-executors'

new Executors(scope: Construct, id: string, config: ExecutorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig">ExecutorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-sourcegraph-aws-executors.Executors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-sourcegraph-aws-executors.Executors.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-sourcegraph-aws-executors.Executors.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig">ExecutorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.getString">getString</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-sourcegraph-aws-executors.Executors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-sourcegraph-aws-executors.Executors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-sourcegraph-aws-executors.Executors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-sourcegraph-aws-executors.Executors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-sourcegraph-aws-executors.Executors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-sourcegraph-aws-executors.Executors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-sourcegraph-aws-executors.Executors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-sourcegraph-aws-executors.Executors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-sourcegraph-aws-executors.Executors.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="cdktf-sourcegraph-aws-executors.Executors.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="cdktf-sourcegraph-aws-executors.Executors.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="cdktf-sourcegraph-aws-executors.Executors.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="cdktf-sourcegraph-aws-executors.Executors.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="cdktf-sourcegraph-aws-executors.Executors.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="cdktf-sourcegraph-aws-executors.Executors.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-sourcegraph-aws-executors.Executors.isConstruct"></a>

```typescript
import { Executors } from 'cdktf-sourcegraph-aws-executors'

Executors.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.Executors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="cdktf-sourcegraph-aws-executors.Executors.isTerraformElement"></a>

```typescript
import { Executors } from 'cdktf-sourcegraph-aws-executors'

Executors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.Executors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorInstanceTag">executorInstanceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMetricsEnvironmentLabel">executorMetricsEnvironmentLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorQueueName">executorQueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorSourcegraphExecutorProxyPassword">executorSourcegraphExecutorProxyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorSourcegraphExternalUrl">executorSourcegraphExternalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorBootDiskSize">dockerMirrorBootDiskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorDiskIops">dockerMirrorDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorHttpAccessCidrRange">dockerMirrorHttpAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorMachineAmi">dockerMirrorMachineAmi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorMachineType">dockerMirrorMachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorSshAccessCidrRange">dockerMirrorSshAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorStaticIp">dockerMirrorStaticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorBootDiskIops">executorBootDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorBootDiskSize">executorBootDiskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorDockerAuthConfig">executorDockerAuthConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorFirecrackerDiskSpace">executorFirecrackerDiskSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorFirecrackerMemory">executorFirecrackerMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorFirecrackerNumCpus">executorFirecrackerNumCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorHttpAccessCidrRange">executorHttpAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorJobMemory">executorJobMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorJobNumCpus">executorJobNumCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorJobsPerInstanceScaling">executorJobsPerInstanceScaling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMachineImage">executorMachineImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMachineType">executorMachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMaxActiveTime">executorMaxActiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMaximumNumJobs">executorMaximumNumJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMaximumRuntimePerJob">executorMaximumRuntimePerJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMaxReplicas">executorMaxReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorMinReplicas">executorMinReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorNumTotalJobs">executorNumTotalJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorPreemptibleMachines">executorPreemptibleMachines</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorResourcePrefix">executorResourcePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorSshAccessCidrRange">executorSshAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.executorUseFirecracker">executorUseFirecracker</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.privateNetworking">privateNetworking</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.Executors.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-sourcegraph-aws-executors.Executors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-sourcegraph-aws-executors.Executors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-sourcegraph-aws-executors.Executors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-sourcegraph-aws-executors.Executors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="cdktf-sourcegraph-aws-executors.Executors.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.Executors.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.Executors.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="cdktf-sourcegraph-aws-executors.Executors.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.Executors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.Executors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="cdktf-sourcegraph-aws-executors.Executors.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `executorInstanceTag`<sup>Required</sup> <a name="executorInstanceTag" id="cdktf-sourcegraph-aws-executors.Executors.property.executorInstanceTag"></a>

```typescript
public readonly executorInstanceTag: string;
```

- *Type:* string

---

##### `executorMetricsEnvironmentLabel`<sup>Required</sup> <a name="executorMetricsEnvironmentLabel" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMetricsEnvironmentLabel"></a>

```typescript
public readonly executorMetricsEnvironmentLabel: string;
```

- *Type:* string

---

##### `executorQueueName`<sup>Required</sup> <a name="executorQueueName" id="cdktf-sourcegraph-aws-executors.Executors.property.executorQueueName"></a>

```typescript
public readonly executorQueueName: string;
```

- *Type:* string

---

##### `executorSourcegraphExecutorProxyPassword`<sup>Required</sup> <a name="executorSourcegraphExecutorProxyPassword" id="cdktf-sourcegraph-aws-executors.Executors.property.executorSourcegraphExecutorProxyPassword"></a>

```typescript
public readonly executorSourcegraphExecutorProxyPassword: string;
```

- *Type:* string

---

##### `executorSourcegraphExternalUrl`<sup>Required</sup> <a name="executorSourcegraphExternalUrl" id="cdktf-sourcegraph-aws-executors.Executors.property.executorSourcegraphExternalUrl"></a>

```typescript
public readonly executorSourcegraphExternalUrl: string;
```

- *Type:* string

---

##### `dockerMirrorBootDiskSize`<sup>Optional</sup> <a name="dockerMirrorBootDiskSize" id="cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorBootDiskSize"></a>

```typescript
public readonly dockerMirrorBootDiskSize: number;
```

- *Type:* number

---

##### `dockerMirrorDiskIops`<sup>Optional</sup> <a name="dockerMirrorDiskIops" id="cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorDiskIops"></a>

```typescript
public readonly dockerMirrorDiskIops: number;
```

- *Type:* number

---

##### `dockerMirrorHttpAccessCidrRange`<sup>Optional</sup> <a name="dockerMirrorHttpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorHttpAccessCidrRange"></a>

```typescript
public readonly dockerMirrorHttpAccessCidrRange: string;
```

- *Type:* string

---

##### `dockerMirrorMachineAmi`<sup>Optional</sup> <a name="dockerMirrorMachineAmi" id="cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorMachineAmi"></a>

```typescript
public readonly dockerMirrorMachineAmi: string;
```

- *Type:* string

---

##### `dockerMirrorMachineType`<sup>Optional</sup> <a name="dockerMirrorMachineType" id="cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorMachineType"></a>

```typescript
public readonly dockerMirrorMachineType: string;
```

- *Type:* string

---

##### `dockerMirrorSshAccessCidrRange`<sup>Optional</sup> <a name="dockerMirrorSshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorSshAccessCidrRange"></a>

```typescript
public readonly dockerMirrorSshAccessCidrRange: string;
```

- *Type:* string

---

##### `dockerMirrorStaticIp`<sup>Optional</sup> <a name="dockerMirrorStaticIp" id="cdktf-sourcegraph-aws-executors.Executors.property.dockerMirrorStaticIp"></a>

```typescript
public readonly dockerMirrorStaticIp: string;
```

- *Type:* string

---

##### `executorBootDiskIops`<sup>Optional</sup> <a name="executorBootDiskIops" id="cdktf-sourcegraph-aws-executors.Executors.property.executorBootDiskIops"></a>

```typescript
public readonly executorBootDiskIops: number;
```

- *Type:* number

---

##### `executorBootDiskSize`<sup>Optional</sup> <a name="executorBootDiskSize" id="cdktf-sourcegraph-aws-executors.Executors.property.executorBootDiskSize"></a>

```typescript
public readonly executorBootDiskSize: number;
```

- *Type:* number

---

##### `executorDockerAuthConfig`<sup>Optional</sup> <a name="executorDockerAuthConfig" id="cdktf-sourcegraph-aws-executors.Executors.property.executorDockerAuthConfig"></a>

```typescript
public readonly executorDockerAuthConfig: string;
```

- *Type:* string

---

##### `executorFirecrackerDiskSpace`<sup>Optional</sup> <a name="executorFirecrackerDiskSpace" id="cdktf-sourcegraph-aws-executors.Executors.property.executorFirecrackerDiskSpace"></a>

```typescript
public readonly executorFirecrackerDiskSpace: string;
```

- *Type:* string

---

##### `executorFirecrackerMemory`<sup>Optional</sup> <a name="executorFirecrackerMemory" id="cdktf-sourcegraph-aws-executors.Executors.property.executorFirecrackerMemory"></a>

```typescript
public readonly executorFirecrackerMemory: string;
```

- *Type:* string

---

##### `executorFirecrackerNumCpus`<sup>Optional</sup> <a name="executorFirecrackerNumCpus" id="cdktf-sourcegraph-aws-executors.Executors.property.executorFirecrackerNumCpus"></a>

```typescript
public readonly executorFirecrackerNumCpus: number;
```

- *Type:* number

---

##### `executorHttpAccessCidrRange`<sup>Optional</sup> <a name="executorHttpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.Executors.property.executorHttpAccessCidrRange"></a>

```typescript
public readonly executorHttpAccessCidrRange: string;
```

- *Type:* string

---

##### `executorJobMemory`<sup>Optional</sup> <a name="executorJobMemory" id="cdktf-sourcegraph-aws-executors.Executors.property.executorJobMemory"></a>

```typescript
public readonly executorJobMemory: string;
```

- *Type:* string

---

##### `executorJobNumCpus`<sup>Optional</sup> <a name="executorJobNumCpus" id="cdktf-sourcegraph-aws-executors.Executors.property.executorJobNumCpus"></a>

```typescript
public readonly executorJobNumCpus: number;
```

- *Type:* number

---

##### `executorJobsPerInstanceScaling`<sup>Optional</sup> <a name="executorJobsPerInstanceScaling" id="cdktf-sourcegraph-aws-executors.Executors.property.executorJobsPerInstanceScaling"></a>

```typescript
public readonly executorJobsPerInstanceScaling: number;
```

- *Type:* number

---

##### `executorMachineImage`<sup>Optional</sup> <a name="executorMachineImage" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMachineImage"></a>

```typescript
public readonly executorMachineImage: string;
```

- *Type:* string

---

##### `executorMachineType`<sup>Optional</sup> <a name="executorMachineType" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMachineType"></a>

```typescript
public readonly executorMachineType: string;
```

- *Type:* string

---

##### `executorMaxActiveTime`<sup>Optional</sup> <a name="executorMaxActiveTime" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMaxActiveTime"></a>

```typescript
public readonly executorMaxActiveTime: string;
```

- *Type:* string

---

##### `executorMaximumNumJobs`<sup>Optional</sup> <a name="executorMaximumNumJobs" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMaximumNumJobs"></a>

```typescript
public readonly executorMaximumNumJobs: number;
```

- *Type:* number

---

##### `executorMaximumRuntimePerJob`<sup>Optional</sup> <a name="executorMaximumRuntimePerJob" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMaximumRuntimePerJob"></a>

```typescript
public readonly executorMaximumRuntimePerJob: string;
```

- *Type:* string

---

##### `executorMaxReplicas`<sup>Optional</sup> <a name="executorMaxReplicas" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMaxReplicas"></a>

```typescript
public readonly executorMaxReplicas: number;
```

- *Type:* number

---

##### `executorMinReplicas`<sup>Optional</sup> <a name="executorMinReplicas" id="cdktf-sourcegraph-aws-executors.Executors.property.executorMinReplicas"></a>

```typescript
public readonly executorMinReplicas: number;
```

- *Type:* number

---

##### `executorNumTotalJobs`<sup>Optional</sup> <a name="executorNumTotalJobs" id="cdktf-sourcegraph-aws-executors.Executors.property.executorNumTotalJobs"></a>

```typescript
public readonly executorNumTotalJobs: number;
```

- *Type:* number

---

##### `executorPreemptibleMachines`<sup>Optional</sup> <a name="executorPreemptibleMachines" id="cdktf-sourcegraph-aws-executors.Executors.property.executorPreemptibleMachines"></a>

```typescript
public readonly executorPreemptibleMachines: boolean;
```

- *Type:* boolean

---

##### `executorResourcePrefix`<sup>Optional</sup> <a name="executorResourcePrefix" id="cdktf-sourcegraph-aws-executors.Executors.property.executorResourcePrefix"></a>

```typescript
public readonly executorResourcePrefix: string;
```

- *Type:* string

---

##### `executorSshAccessCidrRange`<sup>Optional</sup> <a name="executorSshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.Executors.property.executorSshAccessCidrRange"></a>

```typescript
public readonly executorSshAccessCidrRange: string;
```

- *Type:* string

---

##### `executorUseFirecracker`<sup>Optional</sup> <a name="executorUseFirecracker" id="cdktf-sourcegraph-aws-executors.Executors.property.executorUseFirecracker"></a>

```typescript
public readonly executorUseFirecracker: boolean;
```

- *Type:* boolean

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.Executors.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

---

##### `privateNetworking`<sup>Optional</sup> <a name="privateNetworking" id="cdktf-sourcegraph-aws-executors.Executors.property.privateNetworking"></a>

```typescript
public readonly privateNetworking: boolean;
```

- *Type:* boolean

---

##### `randomizeResourceNames`<sup>Optional</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.Executors.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="cdktf-sourcegraph-aws-executors.Executors.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---


### ExecutorsCredentials <a name="ExecutorsCredentials" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials"></a>

Defines an ExecutorsCredentials based on a Terraform module.

Docs at Terraform Registry: {@link https://registry.terraform.io/modules/sourcegraph/executors/aws/~> 5.0.1/submodules/credentials sourcegraph/executors/aws//modules/credentials}

#### Initializers <a name="Initializers" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.Initializer"></a>

```typescript
import { ExecutorsCredentials } from 'cdktf-sourcegraph-aws-executors'

new ExecutorsCredentials(scope: Construct, id: string, config?: ExecutorsCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig">ExecutorsCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig">ExecutorsCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.getString">getString</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.isConstruct"></a>

```typescript
import { ExecutorsCredentials } from 'cdktf-sourcegraph-aws-executors'

ExecutorsCredentials.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.isTerraformElement"></a>

```typescript
import { ExecutorsCredentials } from 'cdktf-sourcegraph-aws-executors'

ExecutorsCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.metricWriterAccessKeyIdOutput">metricWriterAccessKeyIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.metricWriterSecretKeyOutput">metricWriterSecretKeyOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `metricWriterAccessKeyIdOutput`<sup>Required</sup> <a name="metricWriterAccessKeyIdOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.metricWriterAccessKeyIdOutput"></a>

```typescript
public readonly metricWriterAccessKeyIdOutput: string;
```

- *Type:* string

---

##### `metricWriterSecretKeyOutput`<sup>Required</sup> <a name="metricWriterSecretKeyOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.metricWriterSecretKeyOutput"></a>

```typescript
public readonly metricWriterSecretKeyOutput: string;
```

- *Type:* string

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentials.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

---


### ExecutorsDockerMirror <a name="ExecutorsDockerMirror" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror"></a>

Defines an ExecutorsDockerMirror based on a Terraform module.

Docs at Terraform Registry: {@link https://registry.terraform.io/modules/sourcegraph/executors/aws/~> 5.0.1/submodules/docker-mirror sourcegraph/executors/aws//modules/docker-mirror}

#### Initializers <a name="Initializers" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.Initializer"></a>

```typescript
import { ExecutorsDockerMirror } from 'cdktf-sourcegraph-aws-executors'

new ExecutorsDockerMirror(scope: Construct, id: string, config: ExecutorsDockerMirrorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig">ExecutorsDockerMirrorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig">ExecutorsDockerMirrorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.getString">getString</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.isConstruct"></a>

```typescript
import { ExecutorsDockerMirror } from 'cdktf-sourcegraph-aws-executors'

ExecutorsDockerMirror.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.isTerraformElement"></a>

```typescript
import { ExecutorsDockerMirror } from 'cdktf-sourcegraph-aws-executors'

ExecutorsDockerMirror.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.instanceTagPrefix">instanceTagPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.staticIp">staticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.bootDiskSize">bootDiskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.diskThroughput">diskThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.dockerMirrorAccessSecurityGroupId">dockerMirrorAccessSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.httpAccessCidrRange">httpAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.httpMetricsAccessCidrRange">httpMetricsAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.machineAmi">machineAmi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.sshAccessCidrRange">sshAccessCidrRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `instanceTagPrefix`<sup>Required</sup> <a name="instanceTagPrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.instanceTagPrefix"></a>

```typescript
public readonly instanceTagPrefix: string;
```

- *Type:* string

---

##### `randomizeResourceNames`<sup>Required</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

---

##### `staticIp`<sup>Required</sup> <a name="staticIp" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.staticIp"></a>

```typescript
public readonly staticIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean

---

##### `bootDiskSize`<sup>Optional</sup> <a name="bootDiskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.bootDiskSize"></a>

```typescript
public readonly bootDiskSize: number;
```

- *Type:* number

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `diskThroughput`<sup>Optional</sup> <a name="diskThroughput" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.diskThroughput"></a>

```typescript
public readonly diskThroughput: number;
```

- *Type:* number

---

##### `dockerMirrorAccessSecurityGroupId`<sup>Optional</sup> <a name="dockerMirrorAccessSecurityGroupId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.dockerMirrorAccessSecurityGroupId"></a>

```typescript
public readonly dockerMirrorAccessSecurityGroupId: string;
```

- *Type:* string

---

##### `httpAccessCidrRange`<sup>Optional</sup> <a name="httpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.httpAccessCidrRange"></a>

```typescript
public readonly httpAccessCidrRange: string;
```

- *Type:* string

---

##### `httpMetricsAccessCidrRange`<sup>Optional</sup> <a name="httpMetricsAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.httpMetricsAccessCidrRange"></a>

```typescript
public readonly httpMetricsAccessCidrRange: string;
```

- *Type:* string

---

##### `machineAmi`<sup>Optional</sup> <a name="machineAmi" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.machineAmi"></a>

```typescript
public readonly machineAmi: string;
```

- *Type:* string

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

---

##### `sshAccessCidrRange`<sup>Optional</sup> <a name="sshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirror.property.sshAccessCidrRange"></a>

```typescript
public readonly sshAccessCidrRange: string;
```

- *Type:* string

---


### ExecutorsExecutors <a name="ExecutorsExecutors" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors"></a>

Defines an ExecutorsExecutors based on a Terraform module.

Docs at Terraform Registry: {@link https://registry.terraform.io/modules/sourcegraph/executors/aws/~> 5.0.1/submodules/executors sourcegraph/executors/aws//modules/executors}

#### Initializers <a name="Initializers" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.Initializer"></a>

```typescript
import { ExecutorsExecutors } from 'cdktf-sourcegraph-aws-executors'

new ExecutorsExecutors(scope: Construct, id: string, config: ExecutorsExecutorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig">ExecutorsExecutorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig">ExecutorsExecutorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.getString">getString</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.isConstruct"></a>

```typescript
import { ExecutorsExecutors } from 'cdktf-sourcegraph-aws-executors'

ExecutorsExecutors.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.isTerraformElement"></a>

```typescript
import { ExecutorsExecutors } from 'cdktf-sourcegraph-aws-executors'

ExecutorsExecutors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.instanceTag">instanceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.metricsEnvironmentLabel">metricsEnvironmentLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.sourcegraphExecutorProxyPassword">sourcegraphExecutorProxyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.sourcegraphExternalUrl">sourcegraphExternalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.bootDiskIops">bootDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.bootDiskSize">bootDiskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.bootDiskThroughput">bootDiskThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dockerAuthConfig">dockerAuthConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dockerRegistryMirror">dockerRegistryMirror</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dockerRegistryMirrorNodeExporterUrl">dockerRegistryMirrorNodeExporterUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.firecrackerDiskSpace">firecrackerDiskSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.firecrackerMemory">firecrackerMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.firecrackerNumCpus">firecrackerNumCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.httpAccessCidrRange">httpAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.jobMemory">jobMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.jobNumCpus">jobNumCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.jobsPerInstanceScaling">jobsPerInstanceScaling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.machineImage">machineImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maxActiveTime">maxActiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maximumNumJobs">maximumNumJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maximumRuntimePerJob">maximumRuntimePerJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.metricsAccessSecurityGroupId">metricsAccessSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.minReplicas">minReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.numTotalJobs">numTotalJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.preemptibleMachines">preemptibleMachines</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.sshAccessCidrRange">sshAccessCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.useFirecracker">useFirecracker</a></code> | <code>boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `instanceTag`<sup>Required</sup> <a name="instanceTag" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.instanceTag"></a>

```typescript
public readonly instanceTag: string;
```

- *Type:* string

---

##### `metricsEnvironmentLabel`<sup>Required</sup> <a name="metricsEnvironmentLabel" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.metricsEnvironmentLabel"></a>

```typescript
public readonly metricsEnvironmentLabel: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `randomizeResourceNames`<sup>Required</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

---

##### `sourcegraphExecutorProxyPassword`<sup>Required</sup> <a name="sourcegraphExecutorProxyPassword" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.sourcegraphExecutorProxyPassword"></a>

```typescript
public readonly sourcegraphExecutorProxyPassword: string;
```

- *Type:* string

---

##### `sourcegraphExternalUrl`<sup>Required</sup> <a name="sourcegraphExternalUrl" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.sourcegraphExternalUrl"></a>

```typescript
public readonly sourcegraphExternalUrl: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean

---

##### `bootDiskIops`<sup>Optional</sup> <a name="bootDiskIops" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.bootDiskIops"></a>

```typescript
public readonly bootDiskIops: number;
```

- *Type:* number

---

##### `bootDiskSize`<sup>Optional</sup> <a name="bootDiskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.bootDiskSize"></a>

```typescript
public readonly bootDiskSize: number;
```

- *Type:* number

---

##### `bootDiskThroughput`<sup>Optional</sup> <a name="bootDiskThroughput" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.bootDiskThroughput"></a>

```typescript
public readonly bootDiskThroughput: number;
```

- *Type:* number

---

##### `dockerAuthConfig`<sup>Optional</sup> <a name="dockerAuthConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dockerAuthConfig"></a>

```typescript
public readonly dockerAuthConfig: string;
```

- *Type:* string

---

##### `dockerRegistryMirror`<sup>Optional</sup> <a name="dockerRegistryMirror" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dockerRegistryMirror"></a>

```typescript
public readonly dockerRegistryMirror: string;
```

- *Type:* string

---

##### `dockerRegistryMirrorNodeExporterUrl`<sup>Optional</sup> <a name="dockerRegistryMirrorNodeExporterUrl" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.dockerRegistryMirrorNodeExporterUrl"></a>

```typescript
public readonly dockerRegistryMirrorNodeExporterUrl: string;
```

- *Type:* string

---

##### `firecrackerDiskSpace`<sup>Optional</sup> <a name="firecrackerDiskSpace" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.firecrackerDiskSpace"></a>

```typescript
public readonly firecrackerDiskSpace: string;
```

- *Type:* string

---

##### `firecrackerMemory`<sup>Optional</sup> <a name="firecrackerMemory" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.firecrackerMemory"></a>

```typescript
public readonly firecrackerMemory: string;
```

- *Type:* string

---

##### `firecrackerNumCpus`<sup>Optional</sup> <a name="firecrackerNumCpus" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.firecrackerNumCpus"></a>

```typescript
public readonly firecrackerNumCpus: number;
```

- *Type:* number

---

##### `httpAccessCidrRange`<sup>Optional</sup> <a name="httpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.httpAccessCidrRange"></a>

```typescript
public readonly httpAccessCidrRange: string;
```

- *Type:* string

---

##### `jobMemory`<sup>Optional</sup> <a name="jobMemory" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.jobMemory"></a>

```typescript
public readonly jobMemory: string;
```

- *Type:* string

---

##### `jobNumCpus`<sup>Optional</sup> <a name="jobNumCpus" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.jobNumCpus"></a>

```typescript
public readonly jobNumCpus: number;
```

- *Type:* number

---

##### `jobsPerInstanceScaling`<sup>Optional</sup> <a name="jobsPerInstanceScaling" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.jobsPerInstanceScaling"></a>

```typescript
public readonly jobsPerInstanceScaling: number;
```

- *Type:* number

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.machineImage"></a>

```typescript
public readonly machineImage: string;
```

- *Type:* string

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxActiveTime`<sup>Optional</sup> <a name="maxActiveTime" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maxActiveTime"></a>

```typescript
public readonly maxActiveTime: string;
```

- *Type:* string

---

##### `maximumNumJobs`<sup>Optional</sup> <a name="maximumNumJobs" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maximumNumJobs"></a>

```typescript
public readonly maximumNumJobs: number;
```

- *Type:* number

---

##### `maximumRuntimePerJob`<sup>Optional</sup> <a name="maximumRuntimePerJob" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maximumRuntimePerJob"></a>

```typescript
public readonly maximumRuntimePerJob: string;
```

- *Type:* string

---

##### `maxReplicas`<sup>Optional</sup> <a name="maxReplicas" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

---

##### `metricsAccessSecurityGroupId`<sup>Optional</sup> <a name="metricsAccessSecurityGroupId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.metricsAccessSecurityGroupId"></a>

```typescript
public readonly metricsAccessSecurityGroupId: string;
```

- *Type:* string

---

##### `minReplicas`<sup>Optional</sup> <a name="minReplicas" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

---

##### `numTotalJobs`<sup>Optional</sup> <a name="numTotalJobs" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.numTotalJobs"></a>

```typescript
public readonly numTotalJobs: number;
```

- *Type:* number

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

---

##### `preemptibleMachines`<sup>Optional</sup> <a name="preemptibleMachines" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.preemptibleMachines"></a>

```typescript
public readonly preemptibleMachines: boolean;
```

- *Type:* boolean

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

---

##### `sshAccessCidrRange`<sup>Optional</sup> <a name="sshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.sshAccessCidrRange"></a>

```typescript
public readonly sshAccessCidrRange: string;
```

- *Type:* string

---

##### `useFirecracker`<sup>Optional</sup> <a name="useFirecracker" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutors.property.useFirecracker"></a>

```typescript
public readonly useFirecracker: boolean;
```

- *Type:* boolean

---


### ExecutorsNetworking <a name="ExecutorsNetworking" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking"></a>

Defines an ExecutorsNetworking based on a Terraform module.

Docs at Terraform Registry: {@link https://registry.terraform.io/modules/sourcegraph/executors/aws/~> 5.0.1/submodules/networking sourcegraph/executors/aws//modules/networking}

#### Initializers <a name="Initializers" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.Initializer"></a>

```typescript
import { ExecutorsNetworking } from 'cdktf-sourcegraph-aws-executors'

new ExecutorsNetworking(scope: Construct, id: string, config: ExecutorsNetworkingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig">ExecutorsNetworkingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig">ExecutorsNetworkingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.getString">getString</a></code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.isConstruct"></a>

```typescript
import { ExecutorsNetworking } from 'cdktf-sourcegraph-aws-executors'

ExecutorsNetworking.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.isTerraformElement"></a>

```typescript
import { ExecutorsNetworking } from 'cdktf-sourcegraph-aws-executors'

ExecutorsNetworking.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.ipCidrOutput">ipCidrOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.natIpOutput">natIpOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.subnetIdOutput">subnetIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.vpcIdOutput">vpcIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.nat">nat</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `ipCidrOutput`<sup>Required</sup> <a name="ipCidrOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.ipCidrOutput"></a>

```typescript
public readonly ipCidrOutput: string;
```

- *Type:* string

---

##### `natIpOutput`<sup>Required</sup> <a name="natIpOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.natIpOutput"></a>

```typescript
public readonly natIpOutput: string;
```

- *Type:* string

---

##### `subnetIdOutput`<sup>Required</sup> <a name="subnetIdOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.subnetIdOutput"></a>

```typescript
public readonly subnetIdOutput: string;
```

- *Type:* string

---

##### `vpcIdOutput`<sup>Required</sup> <a name="vpcIdOutput" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.vpcIdOutput"></a>

```typescript
public readonly vpcIdOutput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `randomizeResourceNames`<sup>Required</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

---

##### `nat`<sup>Optional</sup> <a name="nat" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.nat"></a>

```typescript
public readonly nat: boolean;
```

- *Type:* boolean

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworking.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### ExecutorsConfig <a name="ExecutorsConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.Initializer"></a>

```typescript
import { ExecutorsConfig } from 'cdktf-sourcegraph-aws-executors'

const executorsConfig: ExecutorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The availability zone to create the instance in. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorInstanceTag">executorInstanceTag</a></code> | <code>string</code> | A label tag to add to all the executors. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMetricsEnvironmentLabel">executorMetricsEnvironmentLabel</a></code> | <code>string</code> | The value for environment by which to filter the custom metrics. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorQueueName">executorQueueName</a></code> | <code>string</code> | The queue from which the executor should dequeue jobs. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorSourcegraphExecutorProxyPassword">executorSourcegraphExecutorProxyPassword</a></code> | <code>string</code> | The shared password used to authenticate requests to the internal executor proxy. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorSourcegraphExternalUrl">executorSourcegraphExternalUrl</a></code> | <code>string</code> | The externally accessible URL of the target Sourcegraph instance. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorBootDiskSize">dockerMirrorBootDiskSize</a></code> | <code>number</code> | Docker registry mirror node disk size in GB. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorDiskIops">dockerMirrorDiskIops</a></code> | <code>number</code> | Persistent Docker registry mirror additional IOPS. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorHttpAccessCidrRange">dockerMirrorHttpAccessCidrRange</a></code> | <code>string</code> | DEPRECATED. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorMachineAmi">dockerMirrorMachineAmi</a></code> | <code>string</code> | AMI for the EC2 instance to use. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorMachineType">dockerMirrorMachineType</a></code> | <code>string</code> | Docker registry mirror node machine type. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorSshAccessCidrRange">dockerMirrorSshAccessCidrRange</a></code> | <code>string</code> | CIDR range from where SSH access to the EC2 instance is acceptable. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorStaticIp">dockerMirrorStaticIp</a></code> | <code>string</code> | The IP to statically assign to the instance. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorBootDiskIops">executorBootDiskIops</a></code> | <code>number</code> | Executor node disk additional IOPS. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorBootDiskSize">executorBootDiskSize</a></code> | <code>number</code> | Executor node disk size in GB. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorDockerAuthConfig">executorDockerAuthConfig</a></code> | <code>string</code> | If provided, this docker auth config file will be used to authorize image pulls. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorFirecrackerDiskSpace">executorFirecrackerDiskSpace</a></code> | <code>string</code> | The amount of disk space to give to each firecracker VM. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorFirecrackerMemory">executorFirecrackerMemory</a></code> | <code>string</code> | The amount of memory to give to each firecracker VM. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorFirecrackerNumCpus">executorFirecrackerNumCpus</a></code> | <code>number</code> | The number of CPUs to give to each firecracker VM. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorHttpAccessCidrRange">executorHttpAccessCidrRange</a></code> | <code>string</code> | DEPRECATED. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorJobMemory">executorJobMemory</a></code> | <code>string</code> | The amount of memory to allocate to each virtual machine or container. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorJobNumCpus">executorJobNumCpus</a></code> | <code>number</code> | The number of CPUs to allocate to each virtual machine or container. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorJobsPerInstanceScaling">executorJobsPerInstanceScaling</a></code> | <code>number</code> | The amount of jobs a single instance should have in queue. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMachineImage">executorMachineImage</a></code> | <code>string</code> | Executor node machine disk image to use for creating the boot volume. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMachineType">executorMachineType</a></code> | <code>string</code> | Executor node machine type. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaxActiveTime">executorMaxActiveTime</a></code> | <code>string</code> | The maximum time that can be spent by the worker dequeueing records to be handled. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaximumNumJobs">executorMaximumNumJobs</a></code> | <code>number</code> | The number of jobs to run concurrently per executor instance. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaximumRuntimePerJob">executorMaximumRuntimePerJob</a></code> | <code>string</code> | The maximum wall time that can be spent on a single job. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaxReplicas">executorMaxReplicas</a></code> | <code>number</code> | The maximum number of executor instances to run in the autoscaling group. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMinReplicas">executorMinReplicas</a></code> | <code>number</code> | The minimum number of executor instances to run in the autoscaling group. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorNumTotalJobs">executorNumTotalJobs</a></code> | <code>number</code> | The maximum number of jobs that will be dequeued by the worker. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorPreemptibleMachines">executorPreemptibleMachines</a></code> | <code>boolean</code> | Whether to use preemptible machines instead of standard machines; |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorResourcePrefix">executorResourcePrefix</a></code> | <code>string</code> | An optional prefix to add to all resources created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorSshAccessCidrRange">executorSshAccessCidrRange</a></code> | <code>string</code> | CIDR range from where SSH access to the EC2 instances is acceptable. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorUseFirecracker">executorUseFirecracker</a></code> | <code>boolean</code> | Whether to isolate commands in virtual machines. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | If not provided, there will be no permissions boundary on IAM roles and users created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.privateNetworking">privateNetworking</a></code> | <code>boolean</code> | If true, the executors and docker mirror will live in a private subnet and communicate with the internet through NAT. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | Use randomized names for resources. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | If provided, the default security groups will not be created. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The availability zone to create the instance in.

---

##### `executorInstanceTag`<sup>Required</sup> <a name="executorInstanceTag" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorInstanceTag"></a>

```typescript
public readonly executorInstanceTag: string;
```

- *Type:* string

A label tag to add to all the executors.

Can be used for filtering out the right instances in stackdriver monitoring.

---

##### `executorMetricsEnvironmentLabel`<sup>Required</sup> <a name="executorMetricsEnvironmentLabel" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMetricsEnvironmentLabel"></a>

```typescript
public readonly executorMetricsEnvironmentLabel: string;
```

- *Type:* string

The value for environment by which to filter the custom metrics.

---

##### `executorQueueName`<sup>Required</sup> <a name="executorQueueName" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorQueueName"></a>

```typescript
public readonly executorQueueName: string;
```

- *Type:* string

The queue from which the executor should dequeue jobs.

---

##### `executorSourcegraphExecutorProxyPassword`<sup>Required</sup> <a name="executorSourcegraphExecutorProxyPassword" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorSourcegraphExecutorProxyPassword"></a>

```typescript
public readonly executorSourcegraphExecutorProxyPassword: string;
```

- *Type:* string

The shared password used to authenticate requests to the internal executor proxy.

---

##### `executorSourcegraphExternalUrl`<sup>Required</sup> <a name="executorSourcegraphExternalUrl" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorSourcegraphExternalUrl"></a>

```typescript
public readonly executorSourcegraphExternalUrl: string;
```

- *Type:* string

The externally accessible URL of the target Sourcegraph instance.

---

##### `dockerMirrorBootDiskSize`<sup>Optional</sup> <a name="dockerMirrorBootDiskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorBootDiskSize"></a>

```typescript
public readonly dockerMirrorBootDiskSize: number;
```

- *Type:* number
- *Default:* 64

Docker registry mirror node disk size in GB.

---

##### `dockerMirrorDiskIops`<sup>Optional</sup> <a name="dockerMirrorDiskIops" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorDiskIops"></a>

```typescript
public readonly dockerMirrorDiskIops: number;
```

- *Type:* number
- *Default:* 3000

Persistent Docker registry mirror additional IOPS.

---

##### `dockerMirrorHttpAccessCidrRange`<sup>Optional</sup> <a name="dockerMirrorHttpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorHttpAccessCidrRange"></a>

```typescript
public readonly dockerMirrorHttpAccessCidrRange: string;
```

- *Type:* string
- *Default:* 10.0.0.0/16

DEPRECATED.

This is not used anymore.

---

##### `dockerMirrorMachineAmi`<sup>Optional</sup> <a name="dockerMirrorMachineAmi" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorMachineAmi"></a>

```typescript
public readonly dockerMirrorMachineAmi: string;
```

- *Type:* string

AMI for the EC2 instance to use.

Must be in the same availability zone. Leave empty to use latest compatible with the Sourcegraph version.

---

##### `dockerMirrorMachineType`<sup>Optional</sup> <a name="dockerMirrorMachineType" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorMachineType"></a>

```typescript
public readonly dockerMirrorMachineType: string;
```

- *Type:* string
- *Default:* m5.large

Docker registry mirror node machine type.

---

##### `dockerMirrorSshAccessCidrRange`<sup>Optional</sup> <a name="dockerMirrorSshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorSshAccessCidrRange"></a>

```typescript
public readonly dockerMirrorSshAccessCidrRange: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0

CIDR range from where SSH access to the EC2 instance is acceptable.

---

##### `dockerMirrorStaticIp`<sup>Optional</sup> <a name="dockerMirrorStaticIp" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.dockerMirrorStaticIp"></a>

```typescript
public readonly dockerMirrorStaticIp: string;
```

- *Type:* string
- *Default:* 10.0.1.4

The IP to statically assign to the instance.

Should be internal.

---

##### `executorBootDiskIops`<sup>Optional</sup> <a name="executorBootDiskIops" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorBootDiskIops"></a>

```typescript
public readonly executorBootDiskIops: number;
```

- *Type:* number
- *Default:* 3000

Executor node disk additional IOPS.

---

##### `executorBootDiskSize`<sup>Optional</sup> <a name="executorBootDiskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorBootDiskSize"></a>

```typescript
public readonly executorBootDiskSize: number;
```

- *Type:* number
- *Default:* 100

Executor node disk size in GB.

---

##### `executorDockerAuthConfig`<sup>Optional</sup> <a name="executorDockerAuthConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorDockerAuthConfig"></a>

```typescript
public readonly executorDockerAuthConfig: string;
```

- *Type:* string

If provided, this docker auth config file will be used to authorize image pulls.

See [Using private registries](https://docs.sourcegraph.com/admin/deploy_executors#using-private-registries) for how to configure.

---

##### `executorFirecrackerDiskSpace`<sup>Optional</sup> <a name="executorFirecrackerDiskSpace" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorFirecrackerDiskSpace"></a>

```typescript
public readonly executorFirecrackerDiskSpace: string;
```

- *Type:* string
- *Default:* 20GB

The amount of disk space to give to each firecracker VM.

---

##### `executorFirecrackerMemory`<sup>Optional</sup> <a name="executorFirecrackerMemory" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorFirecrackerMemory"></a>

```typescript
public readonly executorFirecrackerMemory: string;
```

- *Type:* string
- *Default:* 12GB

The amount of memory to give to each firecracker VM.

---

##### `executorFirecrackerNumCpus`<sup>Optional</sup> <a name="executorFirecrackerNumCpus" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorFirecrackerNumCpus"></a>

```typescript
public readonly executorFirecrackerNumCpus: number;
```

- *Type:* number
- *Default:* 4

The number of CPUs to give to each firecracker VM.

---

##### `executorHttpAccessCidrRange`<sup>Optional</sup> <a name="executorHttpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorHttpAccessCidrRange"></a>

```typescript
public readonly executorHttpAccessCidrRange: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0

DEPRECATED.

This is not used anymore.

---

##### `executorJobMemory`<sup>Optional</sup> <a name="executorJobMemory" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorJobMemory"></a>

```typescript
public readonly executorJobMemory: string;
```

- *Type:* string
- *Default:* 12GB

The amount of memory to allocate to each virtual machine or container.

---

##### `executorJobNumCpus`<sup>Optional</sup> <a name="executorJobNumCpus" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorJobNumCpus"></a>

```typescript
public readonly executorJobNumCpus: number;
```

- *Type:* number
- *Default:* 4

The number of CPUs to allocate to each virtual machine or container.

---

##### `executorJobsPerInstanceScaling`<sup>Optional</sup> <a name="executorJobsPerInstanceScaling" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorJobsPerInstanceScaling"></a>

```typescript
public readonly executorJobsPerInstanceScaling: number;
```

- *Type:* number
- *Default:* 360

The amount of jobs a single instance should have in queue.

Used for autoscaling.

---

##### `executorMachineImage`<sup>Optional</sup> <a name="executorMachineImage" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMachineImage"></a>

```typescript
public readonly executorMachineImage: string;
```

- *Type:* string

Executor node machine disk image to use for creating the boot volume.

Leave empty to use latest compatible with the Sourcegraph version.

---

##### `executorMachineType`<sup>Optional</sup> <a name="executorMachineType" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMachineType"></a>

```typescript
public readonly executorMachineType: string;
```

- *Type:* string
- *Default:* c5n.metal

Executor node machine type.

---

##### `executorMaxActiveTime`<sup>Optional</sup> <a name="executorMaxActiveTime" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaxActiveTime"></a>

```typescript
public readonly executorMaxActiveTime: string;
```

- *Type:* string
- *Default:* 2h

The maximum time that can be spent by the worker dequeueing records to be handled.

---

##### `executorMaximumNumJobs`<sup>Optional</sup> <a name="executorMaximumNumJobs" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaximumNumJobs"></a>

```typescript
public readonly executorMaximumNumJobs: number;
```

- *Type:* number
- *Default:* 18

The number of jobs to run concurrently per executor instance.

---

##### `executorMaximumRuntimePerJob`<sup>Optional</sup> <a name="executorMaximumRuntimePerJob" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaximumRuntimePerJob"></a>

```typescript
public readonly executorMaximumRuntimePerJob: string;
```

- *Type:* string
- *Default:* 30m

The maximum wall time that can be spent on a single job.

---

##### `executorMaxReplicas`<sup>Optional</sup> <a name="executorMaxReplicas" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMaxReplicas"></a>

```typescript
public readonly executorMaxReplicas: number;
```

- *Type:* number
- *Default:* 1

The maximum number of executor instances to run in the autoscaling group.

---

##### `executorMinReplicas`<sup>Optional</sup> <a name="executorMinReplicas" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorMinReplicas"></a>

```typescript
public readonly executorMinReplicas: number;
```

- *Type:* number
- *Default:* 1

The minimum number of executor instances to run in the autoscaling group.

---

##### `executorNumTotalJobs`<sup>Optional</sup> <a name="executorNumTotalJobs" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorNumTotalJobs"></a>

```typescript
public readonly executorNumTotalJobs: number;
```

- *Type:* number
- *Default:* 1800

The maximum number of jobs that will be dequeued by the worker.

---

##### `executorPreemptibleMachines`<sup>Optional</sup> <a name="executorPreemptibleMachines" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorPreemptibleMachines"></a>

```typescript
public readonly executorPreemptibleMachines: boolean;
```

- *Type:* boolean

Whether to use preemptible machines instead of standard machines;

usually way cheaper but might be terminated at any time

---

##### `executorResourcePrefix`<sup>Optional</sup> <a name="executorResourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorResourcePrefix"></a>

```typescript
public readonly executorResourcePrefix: string;
```

- *Type:* string

An optional prefix to add to all resources created.

---

##### `executorSshAccessCidrRange`<sup>Optional</sup> <a name="executorSshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorSshAccessCidrRange"></a>

```typescript
public readonly executorSshAccessCidrRange: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0

CIDR range from where SSH access to the EC2 instances is acceptable.

---

##### `executorUseFirecracker`<sup>Optional</sup> <a name="executorUseFirecracker" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.executorUseFirecracker"></a>

```typescript
public readonly executorUseFirecracker: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to isolate commands in virtual machines.

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

If not provided, there will be no permissions boundary on IAM roles and users created.

The ARN of a policy to use for permissions boundaries with IAM roles and users.

---

##### `privateNetworking`<sup>Optional</sup> <a name="privateNetworking" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.privateNetworking"></a>

```typescript
public readonly privateNetworking: boolean;
```

- *Type:* boolean

If true, the executors and docker mirror will live in a private subnet and communicate with the internet through NAT.

---

##### `randomizeResourceNames`<sup>Optional</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

Use randomized names for resources.

Deployments using the legacy naming convention will be updated in-place with randomized names when enabled.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="cdktf-sourcegraph-aws-executors.ExecutorsConfig.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

If provided, the default security groups will not be created.

The ID of the security group to associate the Docker Mirror network and the Launch Template network with.

---

### ExecutorsCredentialsConfig <a name="ExecutorsCredentialsConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.Initializer"></a>

```typescript
import { ExecutorsCredentialsConfig } from 'cdktf-sourcegraph-aws-executors'

const executorsCredentialsConfig: ExecutorsCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | If not provided, there will be no permissions boundary on IAM roles and users created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | An optional prefix to add to all resources created. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

If not provided, there will be no permissions boundary on IAM roles and users created.

The ARN of a policy to use for permissions boundaries with IAM roles and users.

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsCredentialsConfig.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

An optional prefix to add to all resources created.

---

### ExecutorsDockerMirrorConfig <a name="ExecutorsDockerMirrorConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.Initializer"></a>

```typescript
import { ExecutorsDockerMirrorConfig } from 'cdktf-sourcegraph-aws-executors'

const executorsDockerMirrorConfig: ExecutorsDockerMirrorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.instanceTagPrefix">instanceTagPrefix</a></code> | <code>string</code> | A label tag to add to all the machines; |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | Use randomized names for resources. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.staticIp">staticIp</a></code> | <code>string</code> | The IP to statically assign to the instance. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The ID of the subnet within the given VPC to run the instance in. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC to run the instance in. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | If false, no public IP will be associated with the executors. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.bootDiskSize">bootDiskSize</a></code> | <code>number</code> | Docker registry mirror node disk size in GB. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.diskIops">diskIops</a></code> | <code>number</code> | Persistent Docker registry mirror additional IOPS. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.diskSize">diskSize</a></code> | <code>number</code> | Persistent Docker registry mirror disk size in GB. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.diskThroughput">diskThroughput</a></code> | <code>number</code> | Persistent Docker registry mirror disk throughput in MiB/s. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.dockerMirrorAccessSecurityGroupId">dockerMirrorAccessSecurityGroupId</a></code> | <code>string</code> | If provided, the default security groups will not be created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.httpAccessCidrRange">httpAccessCidrRange</a></code> | <code>string</code> | CIDR range from where HTTP access to the Docker registry is acceptable. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.httpMetricsAccessCidrRange">httpMetricsAccessCidrRange</a></code> | <code>string</code> | DEPRECATED: This is not used anymore. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.machineAmi">machineAmi</a></code> | <code>string</code> | AMI for the EC2 instance to use. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.machineType">machineType</a></code> | <code>string</code> | Docker registry mirror node machine type. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | If not provided, there will be no permissions boundary on IAM roles and users created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | An optional prefix to add to all resources created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.sshAccessCidrRange">sshAccessCidrRange</a></code> | <code>string</code> | CIDR range from where SSH access to the EC2 instance is acceptable. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `instanceTagPrefix`<sup>Required</sup> <a name="instanceTagPrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.instanceTagPrefix"></a>

```typescript
public readonly instanceTagPrefix: string;
```

- *Type:* string

A label tag to add to all the machines;

can be used for filtering out the right instances in stackdriver monitoring and in Prometheus instance discovery.

---

##### `randomizeResourceNames`<sup>Required</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

Use randomized names for resources.

Deployments using the legacy naming convention will be updated in-place with randomized names when enabled.

---

##### `staticIp`<sup>Required</sup> <a name="staticIp" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.staticIp"></a>

```typescript
public readonly staticIp: string;
```

- *Type:* string

The IP to statically assign to the instance.

Should be internal.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ID of the subnet within the given VPC to run the instance in.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC to run the instance in.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* true

If false, no public IP will be associated with the executors.

---

##### `bootDiskSize`<sup>Optional</sup> <a name="bootDiskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.bootDiskSize"></a>

```typescript
public readonly bootDiskSize: number;
```

- *Type:* number
- *Default:* 32

Docker registry mirror node disk size in GB.

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number
- *Default:* 3000

Persistent Docker registry mirror additional IOPS.

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number
- *Default:* 64

Persistent Docker registry mirror disk size in GB.

---

##### `diskThroughput`<sup>Optional</sup> <a name="diskThroughput" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.diskThroughput"></a>

```typescript
public readonly diskThroughput: number;
```

- *Type:* number
- *Default:* 125

Persistent Docker registry mirror disk throughput in MiB/s.

---

##### `dockerMirrorAccessSecurityGroupId`<sup>Optional</sup> <a name="dockerMirrorAccessSecurityGroupId" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.dockerMirrorAccessSecurityGroupId"></a>

```typescript
public readonly dockerMirrorAccessSecurityGroupId: string;
```

- *Type:* string

If provided, the default security groups will not be created.

The ID of the security group to associate the Docker Mirror network with.

---

##### `httpAccessCidrRange`<sup>Optional</sup> <a name="httpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.httpAccessCidrRange"></a>

```typescript
public readonly httpAccessCidrRange: string;
```

- *Type:* string
- *Default:* 10.0.0.0/16

CIDR range from where HTTP access to the Docker registry is acceptable.

---

##### `httpMetricsAccessCidrRange`<sup>Optional</sup> <a name="httpMetricsAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.httpMetricsAccessCidrRange"></a>

```typescript
public readonly httpMetricsAccessCidrRange: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0

DEPRECATED: This is not used anymore.

---

##### `machineAmi`<sup>Optional</sup> <a name="machineAmi" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.machineAmi"></a>

```typescript
public readonly machineAmi: string;
```

- *Type:* string

AMI for the EC2 instance to use.

Must be in the same availability zone. Leave empty to use latest compatible with the Sourcegraph version.

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string
- *Default:* m5n.large

Docker registry mirror node machine type.

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

If not provided, there will be no permissions boundary on IAM roles and users created.

The ARN of a policy to use for permissions boundaries with IAM roles and users.

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

An optional prefix to add to all resources created.

---

##### `sshAccessCidrRange`<sup>Optional</sup> <a name="sshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsDockerMirrorConfig.property.sshAccessCidrRange"></a>

```typescript
public readonly sshAccessCidrRange: string;
```

- *Type:* string
- *Default:* 10.0.0.0/16

CIDR range from where SSH access to the EC2 instance is acceptable.

---

### ExecutorsExecutorsConfig <a name="ExecutorsExecutorsConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.Initializer"></a>

```typescript
import { ExecutorsExecutorsConfig } from 'cdktf-sourcegraph-aws-executors'

const executorsExecutorsConfig: ExecutorsExecutorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.instanceTag">instanceTag</a></code> | <code>string</code> | A label tag to add to all the executors. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.metricsEnvironmentLabel">metricsEnvironmentLabel</a></code> | <code>string</code> | The value for environment by which to filter the custom metrics. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.queueName">queueName</a></code> | <code>string</code> | The queue from which the executor should dequeue jobs. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | Use randomized names for resources. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.sourcegraphExecutorProxyPassword">sourcegraphExecutorProxyPassword</a></code> | <code>string</code> | The shared password used to authenticate requests to the internal executor proxy. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.sourcegraphExternalUrl">sourcegraphExternalUrl</a></code> | <code>string</code> | The externally accessible URL of the target Sourcegraph instance. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The ID of the subnet within the given VPC to run the instance in. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC to run the instance in. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | If false, no public IP will be associated with the executors. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.bootDiskIops">bootDiskIops</a></code> | <code>number</code> | Executor node disk additional IOPS. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.bootDiskSize">bootDiskSize</a></code> | <code>number</code> | Executor node disk size in GB. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.bootDiskThroughput">bootDiskThroughput</a></code> | <code>number</code> | Executor node disk throughput in MiB/s. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dockerAuthConfig">dockerAuthConfig</a></code> | <code>string</code> | If provided, this docker auth config file will be used to authorize image pulls. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dockerRegistryMirror">dockerRegistryMirror</a></code> | <code>string</code> | A URL to a docker registry mirror to use (falling back to docker.io). |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dockerRegistryMirrorNodeExporterUrl">dockerRegistryMirrorNodeExporterUrl</a></code> | <code>string</code> | A URL to a docker registry mirror node exporter to scrape (optional). |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.firecrackerDiskSpace">firecrackerDiskSpace</a></code> | <code>string</code> | The amount of disk space to give to each firecracker VM. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.firecrackerMemory">firecrackerMemory</a></code> | <code>string</code> | The amount of memory to give to each firecracker VM. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.firecrackerNumCpus">firecrackerNumCpus</a></code> | <code>number</code> | The number of CPUs to give to each firecracker VM. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.httpAccessCidrRange">httpAccessCidrRange</a></code> | <code>string</code> | DEPRECATED. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.jobMemory">jobMemory</a></code> | <code>string</code> | The amount of memory to allocate to each virtual machine or container. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.jobNumCpus">jobNumCpus</a></code> | <code>number</code> | The number of CPUs to allocate to each virtual machine or container. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.jobsPerInstanceScaling">jobsPerInstanceScaling</a></code> | <code>number</code> | The amount of jobs a single instance should have in queue. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.machineImage">machineImage</a></code> | <code>string</code> | Executor node machine disk image to use for creating the boot volume. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.machineType">machineType</a></code> | <code>string</code> | Executor node machine type. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maxActiveTime">maxActiveTime</a></code> | <code>string</code> | The maximum time that can be spent by the worker dequeueing records to be handled. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maximumNumJobs">maximumNumJobs</a></code> | <code>number</code> | The number of jobs to run concurrently per executor instance. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maximumRuntimePerJob">maximumRuntimePerJob</a></code> | <code>string</code> | The maximum wall time that can be spent on a single job. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | The maximum number of executor instances to run in the autoscaling group. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.metricsAccessSecurityGroupId">metricsAccessSecurityGroupId</a></code> | <code>string</code> | If provided, the default security groups will not be created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.minReplicas">minReplicas</a></code> | <code>number</code> | The minimum number of executor instances to run in the autoscaling group. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.numTotalJobs">numTotalJobs</a></code> | <code>number</code> | The maximum number of jobs that will be dequeued by the worker. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | If not provided, there will be no permissions boundary on IAM roles and users created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.preemptibleMachines">preemptibleMachines</a></code> | <code>boolean</code> | Whether to use preemptible machines instead of standard machines; |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | An optional prefix to add to all resources created. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.sshAccessCidrRange">sshAccessCidrRange</a></code> | <code>string</code> | CIDR range from where SSH access to the EC2 instances is acceptable. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.useFirecracker">useFirecracker</a></code> | <code>boolean</code> | Whether to isolate commands in virtual machines. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `instanceTag`<sup>Required</sup> <a name="instanceTag" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.instanceTag"></a>

```typescript
public readonly instanceTag: string;
```

- *Type:* string

A label tag to add to all the executors.

Can be used for filtering out the right instances in stackdriver monitoring.

---

##### `metricsEnvironmentLabel`<sup>Required</sup> <a name="metricsEnvironmentLabel" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.metricsEnvironmentLabel"></a>

```typescript
public readonly metricsEnvironmentLabel: string;
```

- *Type:* string

The value for environment by which to filter the custom metrics.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The queue from which the executor should dequeue jobs.

---

##### `randomizeResourceNames`<sup>Required</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

Use randomized names for resources.

Deployments using the legacy naming convention will be updated in-place with randomized names when enabled.

---

##### `sourcegraphExecutorProxyPassword`<sup>Required</sup> <a name="sourcegraphExecutorProxyPassword" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.sourcegraphExecutorProxyPassword"></a>

```typescript
public readonly sourcegraphExecutorProxyPassword: string;
```

- *Type:* string

The shared password used to authenticate requests to the internal executor proxy.

---

##### `sourcegraphExternalUrl`<sup>Required</sup> <a name="sourcegraphExternalUrl" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.sourcegraphExternalUrl"></a>

```typescript
public readonly sourcegraphExternalUrl: string;
```

- *Type:* string

The externally accessible URL of the target Sourcegraph instance.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ID of the subnet within the given VPC to run the instance in.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC to run the instance in.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* true

If false, no public IP will be associated with the executors.

---

##### `bootDiskIops`<sup>Optional</sup> <a name="bootDiskIops" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.bootDiskIops"></a>

```typescript
public readonly bootDiskIops: number;
```

- *Type:* number
- *Default:* 3000

Executor node disk additional IOPS.

---

##### `bootDiskSize`<sup>Optional</sup> <a name="bootDiskSize" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.bootDiskSize"></a>

```typescript
public readonly bootDiskSize: number;
```

- *Type:* number
- *Default:* 500

Executor node disk size in GB.

---

##### `bootDiskThroughput`<sup>Optional</sup> <a name="bootDiskThroughput" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.bootDiskThroughput"></a>

```typescript
public readonly bootDiskThroughput: number;
```

- *Type:* number
- *Default:* 125

Executor node disk throughput in MiB/s.

---

##### `dockerAuthConfig`<sup>Optional</sup> <a name="dockerAuthConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dockerAuthConfig"></a>

```typescript
public readonly dockerAuthConfig: string;
```

- *Type:* string

If provided, this docker auth config file will be used to authorize image pulls.

See [Using private registries](https://docs.sourcegraph.com/admin/deploy_executors#using-private-registries) for how to configure.

---

##### `dockerRegistryMirror`<sup>Optional</sup> <a name="dockerRegistryMirror" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dockerRegistryMirror"></a>

```typescript
public readonly dockerRegistryMirror: string;
```

- *Type:* string

A URL to a docker registry mirror to use (falling back to docker.io).

---

##### `dockerRegistryMirrorNodeExporterUrl`<sup>Optional</sup> <a name="dockerRegistryMirrorNodeExporterUrl" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.dockerRegistryMirrorNodeExporterUrl"></a>

```typescript
public readonly dockerRegistryMirrorNodeExporterUrl: string;
```

- *Type:* string

A URL to a docker registry mirror node exporter to scrape (optional).

---

##### `firecrackerDiskSpace`<sup>Optional</sup> <a name="firecrackerDiskSpace" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.firecrackerDiskSpace"></a>

```typescript
public readonly firecrackerDiskSpace: string;
```

- *Type:* string
- *Default:* 20GB

The amount of disk space to give to each firecracker VM.

---

##### `firecrackerMemory`<sup>Optional</sup> <a name="firecrackerMemory" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.firecrackerMemory"></a>

```typescript
public readonly firecrackerMemory: string;
```

- *Type:* string
- *Default:* 12GB

The amount of memory to give to each firecracker VM.

---

##### `firecrackerNumCpus`<sup>Optional</sup> <a name="firecrackerNumCpus" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.firecrackerNumCpus"></a>

```typescript
public readonly firecrackerNumCpus: number;
```

- *Type:* number
- *Default:* 4

The number of CPUs to give to each firecracker VM.

---

##### `httpAccessCidrRange`<sup>Optional</sup> <a name="httpAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.httpAccessCidrRange"></a>

```typescript
public readonly httpAccessCidrRange: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0

DEPRECATED.

This is not used anymore.

---

##### `jobMemory`<sup>Optional</sup> <a name="jobMemory" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.jobMemory"></a>

```typescript
public readonly jobMemory: string;
```

- *Type:* string
- *Default:* 12GB

The amount of memory to allocate to each virtual machine or container.

---

##### `jobNumCpus`<sup>Optional</sup> <a name="jobNumCpus" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.jobNumCpus"></a>

```typescript
public readonly jobNumCpus: number;
```

- *Type:* number
- *Default:* 4

The number of CPUs to allocate to each virtual machine or container.

---

##### `jobsPerInstanceScaling`<sup>Optional</sup> <a name="jobsPerInstanceScaling" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.jobsPerInstanceScaling"></a>

```typescript
public readonly jobsPerInstanceScaling: number;
```

- *Type:* number
- *Default:* 360

The amount of jobs a single instance should have in queue.

Used for autoscaling.

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.machineImage"></a>

```typescript
public readonly machineImage: string;
```

- *Type:* string

Executor node machine disk image to use for creating the boot volume.

Leave empty to use latest compatible with the Sourcegraph version.

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string
- *Default:* c5n.metal

Executor node machine type.

---

##### `maxActiveTime`<sup>Optional</sup> <a name="maxActiveTime" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maxActiveTime"></a>

```typescript
public readonly maxActiveTime: string;
```

- *Type:* string
- *Default:* 2h

The maximum time that can be spent by the worker dequeueing records to be handled.

---

##### `maximumNumJobs`<sup>Optional</sup> <a name="maximumNumJobs" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maximumNumJobs"></a>

```typescript
public readonly maximumNumJobs: number;
```

- *Type:* number
- *Default:* 18

The number of jobs to run concurrently per executor instance.

---

##### `maximumRuntimePerJob`<sup>Optional</sup> <a name="maximumRuntimePerJob" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maximumRuntimePerJob"></a>

```typescript
public readonly maximumRuntimePerJob: string;
```

- *Type:* string
- *Default:* 30m

The maximum wall time that can be spent on a single job.

---

##### `maxReplicas`<sup>Optional</sup> <a name="maxReplicas" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number
- *Default:* 1

The maximum number of executor instances to run in the autoscaling group.

---

##### `metricsAccessSecurityGroupId`<sup>Optional</sup> <a name="metricsAccessSecurityGroupId" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.metricsAccessSecurityGroupId"></a>

```typescript
public readonly metricsAccessSecurityGroupId: string;
```

- *Type:* string

If provided, the default security groups will not be created.

The ID of the security group to associate the Launch Template network with.

---

##### `minReplicas`<sup>Optional</sup> <a name="minReplicas" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number
- *Default:* 1

The minimum number of executor instances to run in the autoscaling group.

---

##### `numTotalJobs`<sup>Optional</sup> <a name="numTotalJobs" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.numTotalJobs"></a>

```typescript
public readonly numTotalJobs: number;
```

- *Type:* number
- *Default:* 1800

The maximum number of jobs that will be dequeued by the worker.

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

If not provided, there will be no permissions boundary on IAM roles and users created.

The ARN of a policy to use for permissions boundaries with IAM roles and users.

---

##### `preemptibleMachines`<sup>Optional</sup> <a name="preemptibleMachines" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.preemptibleMachines"></a>

```typescript
public readonly preemptibleMachines: boolean;
```

- *Type:* boolean

Whether to use preemptible machines instead of standard machines;

usually way cheaper but might be terminated at any time

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

An optional prefix to add to all resources created.

---

##### `sshAccessCidrRange`<sup>Optional</sup> <a name="sshAccessCidrRange" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.sshAccessCidrRange"></a>

```typescript
public readonly sshAccessCidrRange: string;
```

- *Type:* string
- *Default:* 10.0.0.0/16

CIDR range from where SSH access to the EC2 instances is acceptable.

---

##### `useFirecracker`<sup>Optional</sup> <a name="useFirecracker" id="cdktf-sourcegraph-aws-executors.ExecutorsExecutorsConfig.property.useFirecracker"></a>

```typescript
public readonly useFirecracker: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to isolate commands in virtual machines.

---

### ExecutorsNetworkingConfig <a name="ExecutorsNetworkingConfig" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.Initializer"></a>

```typescript
import { ExecutorsNetworkingConfig } from 'cdktf-sourcegraph-aws-executors'

const executorsNetworkingConfig: ExecutorsNetworkingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The availability zone to create the network in. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.randomizeResourceNames">randomizeResourceNames</a></code> | <code>boolean</code> | Use randomized names for resources. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.nat">nat</a></code> | <code>boolean</code> | When true, the network will contain a NAT router. |
| <code><a href="#cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | An optional prefix to add to all resources created. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The availability zone to create the network in.

---

##### `randomizeResourceNames`<sup>Required</sup> <a name="randomizeResourceNames" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.randomizeResourceNames"></a>

```typescript
public readonly randomizeResourceNames: boolean;
```

- *Type:* boolean

Use randomized names for resources.

Deployments using the legacy naming convention will be updated in-place with randomized names when enabled.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.nat"></a>

```typescript
public readonly nat: boolean;
```

- *Type:* boolean

When true, the network will contain a NAT router.

Use when executors should not get public IPs.

---

##### `resourcePrefix`<sup>Optional</sup> <a name="resourcePrefix" id="cdktf-sourcegraph-aws-executors.ExecutorsNetworkingConfig.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

An optional prefix to add to all resources created.

---



