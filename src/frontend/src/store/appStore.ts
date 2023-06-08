import {
    GET_ALL_DONATION_ITEMS,
    GET_ALL_LOCATIONS,
    GET_ALL_STATUSES,
    GET_ALL_THEMES,
    StateType,
    RESET_DONATIONS,
    ADD_NEW_DONATION_IN_TABLE
} from "../types/appTypes";

export const initialState:StateType = {
    donationItems:[],
    locations:[],
    statuses:[],
    themes:[]
}

export function appReducer(state:StateType, action:any) {
    if (action.type === GET_ALL_DONATION_ITEMS) {
        let donationItems = action.payload;
        return {
            ...state,
            donationItems
        };
    } else if(action.type === GET_ALL_LOCATIONS) {
        let locations = action.payload;
        if(locations.length)
            locations = locations.map((location: { name: string; id: string; }) => ({label: location.name, value: location.id}));
        return {
            ...state,
            locations
        };
    } else if(action.type === GET_ALL_STATUSES) {
        let statuses = action.payload;
        if(statuses.length)
            statuses = statuses.map((status: { name: string; id: string; }) => ({text: status.name, value: status.id}));

        return {
            ...state,
            statuses
        };
    } else if(action.type === GET_ALL_THEMES) {
        let themes = action.payload;
        if(themes.length)
            themes = themes.map((theme: { name: string; id: string; }) => ({label: theme.name, value: theme.id}));
        return {
            ...state,
            themes
        };
    } else if (action.type === RESET_DONATIONS) {
        return {
            ...state,
            donationItems:[]
        };
    } else if (action.type === ADD_NEW_DONATION_IN_TABLE) {
        return {
            ...state,
            donationItems: [action.payload, ...state.donationItems]
        };
    }else{
        throw new Error("cannot found this action type");
    }
}
