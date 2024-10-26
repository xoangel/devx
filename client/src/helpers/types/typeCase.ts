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

interface Screenshot {
  id: number;
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

interface Screencast {
  id: number;
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

export default interface Case {
  documentId: string;
  company_name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  service: string;
  date: string;
  link: string;
  company_type: string;
  screenshots: Screenshot[];
  screencast: Screencast;
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

export interface ServiceModalData {
  firstTab: ServiceTab,
  secondTab?: ServiceTab,
  title: String
  image?: string
}

export interface ServiceTab {
  title: string,
  points: Array<string>,
  minPrice: string
}