import axios from "axios";
import {API, BASE_URL} from "./constants";
import {CreateDonationPayloadType} from "../types/appTypes";

type returnObjType = {
    error: boolean,
    errorMessage:string,
    result: any
}

const instance = axios.create({
    baseURL: BASE_URL,
    // timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export const createNewDonationService = async (data:CreateDonationPayloadType) => {
    const returnOBJ:returnObjType = { error: false, errorMessage:'', result: {} };
    try{
        returnOBJ.result = await instance.post(API.CREATE_DONATION_ITEMS, data);
    } catch (err:any) {
        returnOBJ.error = true;
        returnOBJ.errorMessage = err;
    }
    return returnOBJ;
}


export const getAllDonationItemsService = async () => {
    const returnOBJ:returnObjType = { error: false, errorMessage:'', result: {} };
    try{
        returnOBJ.result = await instance.get(API.DONATIONS_ALL);
    } catch (err:any) {
        returnOBJ.error = true;
        returnOBJ.errorMessage = err;
    }
    return returnOBJ;
}


export const getAllLocationsService = async () => {
    const returnOBJ:returnObjType = { error: false, errorMessage:'', result: {} };
    try{
        returnOBJ.result = await instance.get(API.LOCATIONS);
    } catch (err:any) {
        returnOBJ.error = true;
        returnOBJ.errorMessage = err;
    }
    return returnOBJ;
}


export const getAllStatusesService = async () => {
    const returnOBJ:returnObjType = { error: false, errorMessage:'', result: {} };
    try{
        returnOBJ.result = await instance.get(API.STATUSES);
    } catch (err:any) {
        console.log('result', err);
        returnOBJ.error = true;
        returnOBJ.errorMessage = err;
    }
    return returnOBJ;
}

export const getAllThemesService = async () => {
    const returnOBJ:returnObjType = { error: false, errorMessage:'', result: {} };
    try{
        returnOBJ.result = await instance.get(API.THEMES);
    } catch (err:any) {
        console.log('result', err);
        returnOBJ.error = true;
        returnOBJ.errorMessage = err;
    }
    return returnOBJ;
}

export const resetDonationService = async () => {
    const returnOBJ:returnObjType = { error: false, errorMessage:'', result: {} };
    try{
        returnOBJ.result = await instance.post(API.RESET);
    } catch (err:any) {
        returnOBJ.error = true;
        returnOBJ.errorMessage = err;
    }
    return returnOBJ;
}

export default instance;

