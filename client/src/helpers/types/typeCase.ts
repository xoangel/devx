interface CaseAttributes {
    company_name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    service: string;
    date: string;
    link: string;
}
  
export default interface Case {
    id: number;
    attributes: CaseAttributes;
}