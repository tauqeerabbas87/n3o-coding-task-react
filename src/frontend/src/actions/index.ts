import {
    GET_ALL_DONATION_ITEMS,
    GET_ALL_LOCATIONS, GET_ALL_STATUSES, GET_ALL_THEMES,
    RESET_DONATIONS,
    ADD_NEW_DONATION_IN_TABLE
} from "../types/appTypes";

export const getAllDonationItems = (payload:any) => ({
    type:GET_ALL_DONATION_ITEMS,
    payload
});

export const getAllLocations = (payload:any) => ({
    type:GET_ALL_LOCATIONS,
    payload
})

export const getAllStatuses = (payload:any) => ({
    type:GET_ALL_STATUSES,
    payload
})

export const getAllThemes = (payload:any) => ({
    type:GET_ALL_THEMES,
    payload
})

export const resetDonationItems = (payload:any) => ({
    type:RESET_DONATIONS,
    payload
})
export const addNewDonationInTable = (payload:any) => ({
    type:ADD_NEW_DONATION_IN_TABLE,
    payload
})