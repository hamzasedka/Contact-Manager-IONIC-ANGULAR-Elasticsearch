import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export class Contract  implements IdentityEntity, DeletedEntity {
  uid?: string;
  isSigned: boolean;
  pdfUrl: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
