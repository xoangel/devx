interface MediaFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
  }
  
  interface MediaAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: {
      large?: MediaFormat;
      small?: MediaFormat;
      medium?: MediaFormat;
      thumbnail?: MediaFormat;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  }
  
  interface Screenshot {
    id: number;
    attributes: MediaAttributes;
  }
  
  interface Screencast {
    data: {
      id: number;
      attributes: MediaAttributes;
    };
  }
  
  interface CaseAttributes {
    company_name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    service: string;
    date: string;
    link: string;
    company_type: string;
    screenshots: {
      data: Screenshot[];
    };
    screencast: Screencast;
  }
  
export default interface Case {
    id: number;
    attributes: CaseAttributes;
  }
  
  interface MetaPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
  interface Meta {
    pagination: MetaPagination;
  }
  
export interface CaseResponse {
    data: Case[];
    meta: Meta;
  }