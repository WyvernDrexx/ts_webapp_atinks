export interface ObjectMeta {
  Kind: string
  Tenant: string
  Namespace: string
  Name: string
  ID: string
  CreatedAt: Date
  UpdatedAt: Date
  WrOwners: Owners
  RdOwners: Owners
  UUID: string
  Labels: Labels
  RevisionID: string
}

export type IObjectMetaCreate = Pick<ObjectMeta, 'Kind' | 'Namespace' | 'Tenant' | 'Name'>

export interface Owners {
  ObjectRef: ObjectRef[] | object
}

export interface ObjectRef {
  RefKind: string
  RefID: string
}

export interface Labels {
  Map: object
}
