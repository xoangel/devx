import { AxiosResponse } from "axios";
import StrapiAPI from "./StrapiAPI";
import Case from "./../types/typeCase";

export default class CaseAPI extends StrapiAPI{
    constructor(){
        super();
        
    }

    async getAllCases(): Promise<Case[]>{
        try{
            const cases: AxiosResponse = await this.axiosInstance.get(`/cases?populate=*`);
            return cases.data.data;
        } catch(e){
            throw(e);
        }
    }

    async getCase(id: number): Promise<Case>{
        try{
            const cases: AxiosResponse = await this.axiosInstance.get(`/cases/${id}?populate=*`);
            return cases.data;
        } catch(e){
            throw(e);
        }
    }
}