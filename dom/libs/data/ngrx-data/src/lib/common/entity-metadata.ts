import { EntityMetadataMap } from '@ngrx/data';
import { Filter } from '@dom/common/core';
import * as Dtos from '@dom/common/dto';

function EntityFilterFn<EntityType>(
  entities: EntityType[],
  filter: Filter<EntityType>
): EntityType[] {
  return !!filter ? filter.filter(entities) : entities;
}

export const ENTITY_METADATA: EntityMetadataMap = {
  address: {
    filterFn: EntityFilterFn,
    selectId: (a: Dtos.Address) => a.uid
  },
  userAccount: {
    filterFn: EntityFilterFn,
    selectId: (a: Dtos.UserAccount) => a.uid
  },
  product: {
    filterFn: EntityFilterFn,
    selectId: (a: Dtos.Product) => a.uid
  },
  company: {
    filterFn: EntityFilterFn,
    selectId: (a: Dtos.Company) => a.uid
  },
  storageDocument: {
    filterFn: EntityFilterFn,
    selectId: (a: Dtos.StorageDocument) => a.uid
  }
};
