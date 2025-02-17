---
title: 'SnapshotTransformConfig'
---

# Interface: SnapshotTransformConfig

[types/src](../modules/types_src).[YamlConfig](../modules/types_src.YamlConfig).SnapshotTransformConfig

Configuration for Snapshot extension

## Table of contents

### Properties

- [apply](types_src.YamlConfig.SnapshotTransformConfig#apply)
- [if](types_src.YamlConfig.SnapshotTransformConfig#if)
- [outputDir](types_src.YamlConfig.SnapshotTransformConfig#outputdir)
- [respectSelectionSet](types_src.YamlConfig.SnapshotTransformConfig#respectselectionset)

## Properties

### apply

• **apply**: `string`[]

Resolver to be applied
For example;
  apply:
      - Query.* \<- * will apply this extension to all fields of Query type
      - Mutation.someMutationButProbablyYouWontNeedIt

#### Defined in

[packages/types/src/config.ts:1571](https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1571)

___

### if

• `Optional` **if**: `string` \| `boolean`

Expression for when to activate this extension.
Value can be a valid JS expression string or a boolean (Any of: String, Boolean)

#### Defined in

[packages/types/src/config.ts:1563](https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1563)

___

### outputDir

• **outputDir**: `string`

Path to the directory of the generated snapshot files

#### Defined in

[packages/types/src/config.ts:1575](https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1575)

___

### respectSelectionSet

• `Optional` **respectSelectionSet**: `boolean`

Take snapshots by respecting the requested selection set.
This might be needed for the handlers like Postgraphile or OData that rely on the incoming GraphQL operation.

#### Defined in

[packages/types/src/config.ts:1580](https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1580)
